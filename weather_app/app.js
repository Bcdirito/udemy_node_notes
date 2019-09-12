const request = require("request")

const currentLocationURL = "https://api.darksky.net/forecast/a20071b704e2a45e50f3d9ece9208ca0/37.8267,-122.4233"

request({url: currentLocationURL }, (error, res) => {
    const data = JSON.parse(res.body)
    console.log(data.currently)
})