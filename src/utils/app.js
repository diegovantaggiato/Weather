import _ from 'lodash';
var $ = require( "jquery" );
var weatherApi = process.env.KEY_weatherApi
var geoFindMe_Api = process.env.KEY_geoFindMe

export function getWeather(){
    
    $(".weatherResponse").html("");
    var cityName= $('#cityName').val();
    var apiCall= 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+''+'&appid='+weatherApi+'&units=metric&lang=it';
    $.getJSON(apiCall, weatherCallback)

    function weatherCallback(weatherData){
        console.log(weatherData);
        var country = weatherData.sys.country;
        var description = weatherData.weather[0].description
        var temperatura = weatherData.main.temp
        var tempMax = weatherData.main.temp_max
        var tempMin = weatherData.main.temp_min
        var mainCondition = weatherData.weather[0].main
        var percepiti = weatherData.main.feels_like
        var umidita = weatherData.main.humidity
        /*city name*/
        $(".city").html("");
        $('.city')[0].append(''+cityName.toUpperCase()+' '+country)
        /*condizioni meteo*/
        $(".gradi").html("");
        $('.gradi')[0].append(''+temperatura.toFixed()+'°')

        $(".max").html("");
        $('.max')[0].append(''+tempMax.toFixed()+'°')

        $(".min").html("");
        $('.min')[0].append(''+tempMin.toFixed()+'°')

        $(".perc").html("");
        $('.perc')[0].append(''+percepiti.toFixed()+'°')

        $(".umi").html("");
        $('.umi')[0].append(''+umidita.toFixed()+'%')
        /*Description*/
        $(".desc").html("");
        $('.desc')[0].append(''+description.toUpperCase()+'')       

        /*dynamyc Background */
        switch (mainCondition) {
            case 'Clouds':
                setTimeout(function(){
                $("#page").css('background', 'url(../assets/clouds.jpg) center center fixed');
                $("#page").css('background-size', "cover" )
                $("#page").css('transition', 'background 1s linear')
                },750);
                break;
            case 'Clear':
                setTimeout(function(){
                $("#page").css('background', 'url(../assets/clear.jpg) center center fixed');
                $("#page").css('background-size', "cover" )
                $("#page").css('transition', 'background 1s linear')
                },750);    
                break;
            case 'Rain':
                setTimeout(function(){
                $("#page").css('background', 'url(../assets/pioggia.jpg) center center fixed');
                $("#page").css('background-size', "cover" )
                $("#page").css('transition', 'background 1s linear')
                },750);    
               break;
            case 'Thunderstorm':
                setTimeout(function(){
                $("#page").css('background', 'url(../assets/thunder.jpg) center center fixed');
                $("#page").css('background-size', "cover" )
                $("#page").css('transition', 'background 1s linear')
                },750);
               break;
            case 'Drizzle':
                setTimeout(function(){
                $("#page").css('background', 'url(../assets/drizzle.jpg) center center fixed');
                $("#page").css('background-size', "cover" )
                $("#page").css('transition', 'background 2s linear')
                },750);
                break;
            case 'Snow':
                setTimeout(function(){
                $("#page").css('background', 'url(../assets/snow.jpg) center center fixed');
                $("#page").css('background-size', "cover" )
                $("#page").css('transition', 'background 1s linear')
                },750);
                break;
            default:
                break;
        }
        
    }
}

    /* Default background*/
    $("#page").css('background', 'url(../assets/default.jpg) center center fixed');
    $("#page").css('background-size', "cover" )
    $("#page").css('animation', 'fadein 2s')

    /*Geolocation*/
export function geoFindMe() {
        var platform = new H.service.Platform({
            'apikey': geoFindMe_Api
          });
          var geocoder = platform.getSearchService();
          if(navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(position => {
                  geocoder.reverseGeocode(
                      {
                          limit: 1,
                          at: position.coords.latitude + "," + position.coords.longitude
                      }, data => {
                        var input = $( "#cityName" );
                        input.val( input.val() + ""+data.items[0].address.city+"" );
                        getWeather();
                      }, error => {
                          console.error(error);
                      }
                  );
             });
          } else {
              console.error("Geolocation is not supported by this browser!");
          }
          
        navigator.geolocation.getCurrentPosition(success, error);
              }
