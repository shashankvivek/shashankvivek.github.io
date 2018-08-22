angular.module('myApp', []).controller('MyCtrl',['$scope', '$window', $q, function($scope, $window, $q) {
    $scope.choices = [{ name: 'Mukka' }, { name: 'Kutai' }, { name: '5 Star' }, { name: 'None of the above' }];
    $scope.value = [];

    $scope.value = [];
    $scope.jaljalaUpdated = function(choice) {
        $scope.value = $scope.value || [];
        if (choice.checked) {
            $scope.value.push(choice.name);
            $scope.value = _.uniq($scope.value);
        } else {
            $scope.value = _.without($scope.value, choice.name);
        }
    };

    $scope.submit = function(valid) {
        if (valid) {
            console.log($scope.value.indexOf('None of the above') === -1);
            if (
                $scope.fname.toLowerCase() === 'guppy' &&
                $scope.lname.toLowerCase() === 'puppy' &&
                $scope.act1 === '4' &&
                $scope.value.length === 3 &&
                $scope.value.indexOf('None of the above') === -1 &&
                $scope.act3 === 'Gym Boy Rocks' &&
                $scope.act4 === '(49*56.2)-2752' &&
                $scope.sum === 4 &&
                $scope.act5 === '120' &&
                $scope.act6 === '2' &&
                $scope.act7 === 'Using pipe of radius r'
            ) {
                $window.location.href = '/success.html';
            } else {
                $window.location.href = '/error.html';
            }
        }
    };

    $scope.randomGif = function(){
        $scope.number = Math.floor(Math.random() * (10 - 1) + 1);
    }
}]);
