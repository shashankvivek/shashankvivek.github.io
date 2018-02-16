describe('ReportController', function () {
    var ReportController, scope, rootScope;

    beforeEach(angular.mock.module('weather.report'));

    beforeEach(inject(function ($controller, $rootScope, $injector) {
        scope = $rootScope.$new();
        rootScope = $rootScope;
        ReportController = $controller('ReportController',{
            $scope : scope,
            $rootScope : rootScope
        })
    }
    ))

    it(' should be defined ', function () {
       expect(ReportController).toBeDefined();
    })
    it('should catch events and render',function(){
        rootScope.$emit('show-report',['data1','data2']);
        expect(scope.data.length).toEqual(2);
    })
})