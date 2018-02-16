describe('SearchController', function () {
    var SearchController, getDataSuccess, serviceMock, scope, rootScope;

    beforeEach(angular.mock.module('weather.search'));

    beforeEach(function () {
        getDataSuccess = true;
        serviceMock = {};
        module('weather.search', function ($provide) {
            $provide.value('SearchService', serviceMock)
        });
        inject(function ($q) {
            serviceMock.getLocationList = function () {
                var deferred = $q.defer();
                if (getDataSuccess) {
                    deferred.resolve({data: ['location1', 'location2']});
                } else {
                    deferred.reject({data : 'error'});
                }
                return deferred.promise;
            }
        })
    })

    beforeEach(inject(function ($controller, $rootScope, $injector) {
        scope = $rootScope.$new();
        rootScope = $rootScope;
    }
    ))

    describe(' loading init data ', function () {
        it('should have Location when loaded with success', inject(function ($controller, SearchService) {
            getDataSuccess = true;
            SearchController = $controller('SearchController', {
                $scope: scope,
                $rootScope: rootScope,
                'SearchService': SearchService
            });
            scope.$apply();
            expect(SearchController).toBeDefined();
            expect(scope.locations.length).toEqual(2); 
        }))

        it('should have error when response fails', inject(function ($controller, SearchService) {
            getDataSuccess = false;
            SearchController = $controller('SearchController', {
                $scope: scope,
                $rootScope: rootScope,
                'SearchService': SearchService
            });
            scope.$apply();
            expect(SearchController).toBeDefined();
            expect(scope.error).toEqual('error'); 
        }))
    })
})