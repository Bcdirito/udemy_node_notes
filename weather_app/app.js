const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

let input = process.argv[2]


if (!input) console.log ("Please provide address")
else {
    geocode(input, (error, { latitude, longitude, location } = data) => {
        if (error) console.log(error)
        else {
            forecast(latitude, longitude, (error, forecastData) => {
                if (error) console.log(`\n${error}`)
                else {
                    console.log(`\n${location}`)
                    console.log(`\n${forecastData}`)
                }
            })
        }
    })
}
