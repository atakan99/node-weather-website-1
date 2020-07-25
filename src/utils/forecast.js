const request = require('postman-request');

const forecast = (latitude, longitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=5fee3f988f0fd330a4eb68c858245851&query=' + latitude + ',' + longitude +'&units=m';

    //shorthand for url => url: url => url
    request({url, json: true}, (error, {body})=>{
        if (error){
            callback('Unable to connect to weather service', undefined)
        }else if (body.error){
             callback('Unable the find location', undefined);   
        }else{
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out and it fells like ' + body.current.feelslike + ' degrees out.' + ' The humidity is ' + body.current.humidity +'%.');
        }


    })
}

module.exports = forecast;