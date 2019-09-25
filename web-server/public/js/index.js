const getWeatherData = (address) => { 
    fetch(`http://localhost:3000/weather?address=${address}`)
    .then(res => res.json())
    .then(json => {
        if (json.error) console.log(json.error)
        else console.log(json.location, json.forecast)
    })
}

document.getElementById("weatherForm").addEventListener("submit", (e) => {
    e.preventDefault()
    getWeatherData(encodeURI(e.target.location.value))
    e.target.location.value = ""
})