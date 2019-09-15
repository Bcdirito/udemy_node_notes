const request = require("request")

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYmRpcml0byIsImEiOiJjazBoNGloN3cwMGM3M21zN251dTR0a3I2In0.HYzT5FP38SY2EEXGvIpdow&limit=1`
    request({url: url, json: true}, (error, res) => {
        if (error) callback("Unable to connect to location services!", undefined)
        else {
            const body = res.body
            if (body.features.length === 0) callback("Unable to find location. Try another search.", undefined)
            else {
                callback(undefined, {
                    latitude: body.features[0].center[1],
                    longitude: body.features[0].center[0],
                    location: body.features[0].place_name
                })
            }
        }
    })
}

module.exports = geocode