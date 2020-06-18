const postman_request = require('postman-request')

const forecast = (latitude, longitude,  callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b004106eeade0f405ef5f607837abc92&query=' + latitude + ',' + longitude + '&units=f'
    postman_request({url, json: true}, (error, {body} = {}) => {
        if(error){
            callback('Unable to connecr weather server!', undefined)
        }else if(body.error){
            callback('Unable to find location.', undefined)
        }else{
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degree out.' +
                   ' It feals like ' + body.current.feelslike +' degree out.')
        }
    })

}

module.exports = forecast