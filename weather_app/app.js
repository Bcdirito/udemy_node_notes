const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")


// const currentLocationURL = "https://api.darksky.net/forecast/a20071b704e2a45e50f3d9ece9208ca0/37.8267,-122.4233"

// const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmRpcml0byIsImEiOiJjazBoNGloN3cwMGM3M21zN251dTR0a3I2In0.HYzT5FP38SY2EEXGvIpdow&limit=1"

// Print current forecast in Celsius
// request({url: currentLocationURL, json: true }, (error, res) => {
//     if (error) console.log("Unable to connect to weather service!")
//     else if (res.body.error) console.log(res.body.error)
//     else {
//         const currentData = res.body.currently
//         console.log(`It is currently ${currentData.temperature} degrees out. There is a ${currentData.precipProbability}% chance of rain.`)
//     }
// })

// Print forecast for today

// request({url: currentLocationURL, json: true}, (error, res) => {
//     if (error) console.log("Unable to connect to weather service!")
//     else if (res.body.error) console.log(res..body.error)
//     else console.log(res.body.daily.data[0].summary)
// })

geocode("New York", (error, data) => {
    if (error) console.log(error)
    else console.log(data)
})

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
    if (error) console.log(error)
    else console.log(`\n${data}`)
})