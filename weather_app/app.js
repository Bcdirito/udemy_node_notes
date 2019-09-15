const request = require("request")

const currentLocationURL = "https://api.darksky.net/forecast/a20071b704e2a45e50f3d9ece9208ca0/37.8267,-122.4233?units=si"

const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmRpcml0byIsImEiOiJjazBoNGloN3cwMGM3M21zN251dTR0a3I2In0.HYzT5FP38SY2EEXGvIpdow&limit=1"

// Print current forecast in Celsius
request({url: currentLocationURL, json: true }, (error, res) => {
    if (error) console.log("Unable to connect to weather service!")
    else if (res.body.error) console.log(res.body.error)
    else {
        const currentData = res.body.currently
        console.log(`It is currently ${currentData.temperature} degrees out. There is a ${currentData.precipProbability}% chance of rain.`)
    }
})

// Print forecast for today

request({url: currentLocationURL, json: true}, (error, res) => {
    if (error) console.log("Unable to connect to weather service!")
    else if (res.body.error) console.log(res..body.error)
    else console.log(res.body.daily.data[0].summary)
})

// Geocoding
// Address -> Lat/Long


// Print Lat/Long for LA
request({url: geocodeURL, json: true}, (error, res) => {
    if (error) console.log("Unable to connect to Location Services!")
    else {
        const resBod = res.body
        if (resBod.message || (resBod.features === undefined || resBod.features.length === 0)) console.log(resBod.message)
        else {
            const latitude = resBod.features[0].center[1]
            const longitude = resBod.features[0].center[0]
            console.log(latitude, longitude)
        }
    }
})

