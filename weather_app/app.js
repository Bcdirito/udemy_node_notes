const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

geocode("New York", (error, data) => {
    if (error) console.log(error)
    else console.log(data)
})

forecast(-75.7088, 44.1545, (error, data) => {
    if (error) console.log(error)
    else console.log(`\n${data}`)
})