/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {
    angular.module('weather.report', [])

        .directive('report', function () {
            return {
                restrict: 'E',
                controller: 'ReportController',
                templateUrl: 'scripts/directive/report/report.html',
            }
        })

        .controller('ReportController', function ($scope, $rootScope) {
            $rootScope.$on('show-report', function (event, data) {
                $scope.data = data;
            })
        })
})()