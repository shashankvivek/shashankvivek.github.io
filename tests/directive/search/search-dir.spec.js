describe('Search Directive', function () {

    var event, element, $scope;
    beforeEach(angular.mock.module('weather.search'));

    beforeEach(
        inject(function ($rootScope, $compile) {
            var $compile = $compile;
            $scope = $rootScope.$new();
            element = $compile('<search></search>')($scope);
            event = document.createEvent("Events");
            event.initEvent('keydown', true, false);

    }));

    it('should handle a keydown event', function () {

        event.keyCode = 27;
        element.triggerHandler(event);
        expect($scope.in_focus).toBeFalsy();

    });

});
