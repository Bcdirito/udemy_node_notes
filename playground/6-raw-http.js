const https = require("https")

const url = `https://api.darksky.net/forecast/a20071b704e2a45e50f3d9ece9208ca0/40,-75`

const request = https.request(url, (res) => {
    let data = ""

    res.on("data", (chunk) => {
        data += chunk
    })

    res.on("end", () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on("error", (error) => {
    console.log("Error: ", error)
})

request.end()