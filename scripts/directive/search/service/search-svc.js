angular.module('weather.search').value('CONSTANTS',{
    APP_ID : '93cd8d8cebc55c89b06a8f289020be1f'
});


angular.module('weather.search').factory('SearchService',function ($http,CONSTANTS){
    return{
        
        getWeatherReport : function (location_id){
            var url = 'http://api.openweathermap.org/data/2.5/forecast?id=' + location_id+ '&appid=' + CONSTANTS.APP_ID + '&units=metric';
            return $http.get(url)
        },
        getLocationList : function (){
            return $http.get('static/json/city.list.json');
        }
    }
})