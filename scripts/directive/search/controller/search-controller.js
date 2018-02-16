/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('weather.search').controller('SearchController', function ($scope, $rootScope, SearchService) {

    $scope.locations = [];
    init();
    $scope.searchText = {
        data: '',
        obj: {}
    };
    $scope.valid_search_text_length = $scope.searchText.data.length > 2;

    $scope.searchWeatherInfo = function () {
        if ($scope.valid_search_text_length) {
            $scope.in_focus = false;
            SearchService.getWeatherReport($scope.searchText.obj.id)
                .then(function (success) {
                    $rootScope.$emit('show-report', success.data);
                }, function (error) {
                    console.error(error);
                    alert('There was some error while fetching the Weather Report')
                })
        } else {
            alert('Please select a location!')
        }
    };

    $scope.selectLocation = function (selected_obj) {
        $scope.searchText = {
            data: selected_obj.name + "," + selected_obj.country,
            obj: selected_obj
        };
        $scope.in_focus = false;
        $scope.searchWeatherInfo();
    }

    $scope.changed = function () {
        if ($scope.searchText.data.length > 2) {
            $scope.valid_search_text_length = true;
            $scope.in_focus = true;
            $scope.result = _.filter($scope.locations, function (data) {
                return data['name'].toLowerCase().includes($scope.searchText.data.toLowerCase())
            });
        } else {
            $scope.valid_search_text_length = false;
            $scope.result = []
        }
    };

    $scope.doubleClick = function () {
        $scope.in_focus = true;
        if ($scope.searchText.data) {
            $scope.valid_search_text_length = ($scope.searchText.data.length > 2)
        }
    }


    function init() {
        SearchService.getLocationList()
            .then(function (success) {
                $scope.locations = success.data;
            }, function (error) {
                console.error(error);
                $scope.error = error.data;
                alert('There has been some error fetching location details.')
            })
    }
});
