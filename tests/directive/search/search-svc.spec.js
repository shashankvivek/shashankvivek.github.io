describe("SearchService", function () {

    beforeEach(module("weather.search"));

    describe(" Factory : ", function () {
        var service, $httpBackend;
        beforeEach(inject(function ($injector) {
            service = $injector.get('SearchService');
            $httpBackend = $injector.get('$httpBackend');

            $httpBackend.when('GET', "http://api.openweathermap.org/data/2.5/forecast?id=1259243&appid=93cd8d8cebc55c89b06a8f289020be1f&units=metric")
                .respond(["data1", "data2", "data3"]);
            $httpBackend.when('GET', "static/json/city.list.json")
                .respond(["data1", "data2"]);
        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('getLocationList() should return response', function () {
            service.getLocationList().then(function (response) {
                expect(response.data.length).toEqual(2);
            });
            $httpBackend.flush();
        });

        it('getWeatherReport() should return response', function () {
            service.getWeatherReport(1259243).then(function (response) {
                expect(response.data.length).toEqual(3);
            });
            $httpBackend.flush();
        });


    });
});