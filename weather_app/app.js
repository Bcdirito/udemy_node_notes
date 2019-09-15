const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

// Accept Location as CLI argument
// 1. Access cli argument without yargs
// 2. Use the string vale as the input for geocode
// 3. Only geocode if location was provided
// 4. Test work

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
