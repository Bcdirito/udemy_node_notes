const messageType = document.getElementById("messageType")
const messageContent = document.getElementById("messageContent")
const weatherForm = document.getElementById("weatherForm")

const getWeatherData = (address) => { 
    fetch(`/weather?address=${address}`)
    .then(res => res.json())
    .then(json => {
        if (json.error) renderError(json.error)
        else renderMessages(json.location, json.forecast)
    })
}

const renderError = (message) => {
    messageType.innerText = message
    messageContent.innerText = ""
}

const renderMessages = (location, forecast) => {
    messageType.innerText = location
    messageContent.innerText = forecast
}

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault()
    getWeatherData(encodeURI(e.target.location.value))
    e.target.location.value = ""
})