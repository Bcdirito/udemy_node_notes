const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

let input = process.argv[2]

if (!input) console.log ("Please provide address")
else {
    geocode(input, (error, data) => {
        if (error) console.log(error)
        else {
            forecast(data.latitude, data.longitude, (error, forecastData) => {
                if (error) console.log(`\n${error}`)
                else {
                    console.log(`\n${data.location}`)
                    console.log(`\n${forecastData}`)
                }
            })
        }
    })
}
