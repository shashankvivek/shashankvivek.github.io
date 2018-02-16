describe('SiteController', function () {
    var SiteController;
    beforeEach(angular.mock.module('myApp'));

    beforeEach(inject(function ($controller, $rootScope) {
        var $scope = $rootScope.$new();
        SiteController = $controller('SiteController', {
            $scope: $scope
        });
    }
    ))

    it('should be defined', function () {
        expect(SiteController).toBeDefined();
    })
})