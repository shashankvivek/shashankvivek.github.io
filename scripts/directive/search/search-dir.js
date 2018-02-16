(function () {
    angular.module('weather.search', [])

            .directive('search', function () {
                return {
                    restrict: 'E',
                    scope : {},
                    link: function (scope, element) {
                        scope.current = 0;
                        scope.setCurrent = function (index) {
                            scope.current = index;
                        };
                        element.bind("keyup", function (event) {
                            if (event.which === 27) {
                                scope.$apply(function () {
                                    scope.in_focus = false;
                                });
                                event.preventDefault();
                            }
                        });
                    },
                    templateUrl: 'scripts/directive/search/search-box.html',
                    controller: 'SearchController'
                }
            })

            
})();