import _ from 'lodash';
var $ = require( "jquery" );
var weatherApi = process.env.KEY_weatherApi
var geoFindMe_Api = process.env.KEY_geoFindMe
import {getWeather} from "./utils/app"
import {geoFindMe} from "./utils/app"

$("#cityName").on('input',function(){ 
    getWeather();
})

$('#geoLocation').on('click', function(){
    geoFindMe();
 })

