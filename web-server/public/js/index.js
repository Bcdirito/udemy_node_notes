console.log("JS File Connected")

fetch("http://localhost:3000/weather?address=boston")
.then(res => res.json())
.then(json => {
    if (json.error) console.log(json.error)
    else console.log(json.location, json.forecast)
})