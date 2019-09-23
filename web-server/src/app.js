const path = require("path")
const express = require("express")
const hbs = require("hbs")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

const app = express()

// Defining paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public") 
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

// Set up handlebars engine and views location
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.listen(3000, () => {
    console.log("Server is up on port 3000")
})

app.get("", (req, res) => {
    res.render("index", {
        title: "Weather",
        name: "Brian DiRito"
    })
})


app.get("/weather", (req, res) => {
    if (!req.query.address){
        return res.send({
            error: "You need to send an address"
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location}) => {
        if (error) return res.send({ error })
        
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) return res.send({ error })
            
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get("/products", (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "You must provide a search term"
        })
    }
    res.send({
        products: []
    })
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Me",
        name: "Brian DiRito"
    })
})

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help Page",
        message: "You are now on the help page.",
        name: "Brian DiRito"
    })
})

app.get("/help/*", (req, res) => {
    res.render("error", {
        title: "Help 404",
        message: "Help article not found",
        name: "Brian DiRito"
    })
})

// Always needs to come last
app.get("*", (req, res) => {
    res.render("error", {
        title: "404",
        message: "Page not found.",
        name: "Brian DiRito"
    })
})

