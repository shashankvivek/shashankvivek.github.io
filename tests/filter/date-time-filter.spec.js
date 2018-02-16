describe('UTCtime Filter',function(){

    var filter;
    beforeEach(angular.mock.module('myApp'));

    beforeEach(inject(function($filter){
        filter = $filter;
    }))

    it('should convert date and time to UTC format',function(){
        var dateNtime = '2018-02-16 21:00:00';
        var result = filter('UTCtime')(dateNtime);
        expect(result).toBe('Fri, 16 Feb 2018 15:30:00 GMT')
    })


})