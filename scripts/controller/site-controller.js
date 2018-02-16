/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('myApp')
        .controller('SiteController', function ($scope,$http) {
            $scope.httpRequestInProgress = function () {
                return $http.pendingRequests.length > 0;
            };

            $scope.$watch($scope.httpRequestInProgress, function (pendingRequests) {
                $scope.universal_spinner = (pendingRequests) ? pendingRequests : false;
            })
        });