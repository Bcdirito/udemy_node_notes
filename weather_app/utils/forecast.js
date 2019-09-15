const request = require("request")

const forecast = (lat, lon, callback) => {
    const url = `https://api.darksky.net/forecast/a20071b704e2a45e50f3d9ece9208ca0/${lat},${lon}`
    request({url: url, json: true}, (error, res) => {
        if (error) callback("Could Not Connect to API", undefined)
        else {
            const body = res.body
            if (body.error) callback(body.error, undefined)
            else {
                callback(undefined, `It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`)
            }
        }
    })
}

module.exports = forecast