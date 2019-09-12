const request = require("request")

const currentLocationURL = "https://api.darksky.net/forecast/a20071b704e2a45e50f3d9ece9208ca0/37.8267,-122.4233?units=si"

// Print current forecast in Celsius
request({url: currentLocationURL, json: true }, (error, res) => {
    const currentData = res.body.currently
    console.log(`It is currently ${currentData.temperature} degrees out. There is a ${currentData.precipProbability}% chance of rain.`)
})

// Print forecast for today

request({url: currentLocationURL, json: true}, (error, res) => {
    console.log(res.body.daily.data[0].summary)
})

