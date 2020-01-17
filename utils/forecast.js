const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/8ec26beb8b911b5722cc52622831929b/' + latitude + ',' + longitude

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.')
        } else if (body.error) {
            callback('Unable to find location.')
        } else {
            const currentWeather = body
            const data = currentWeather.daily.data[0].summary + " It is currently " + currentWeather.currently.temperature + " degrees out. There is a " + currentWeather.currently.precipProbability + "% chance of rain."
            
            callback(undefined, data)
        }    
    })
}

module.exports = forecast