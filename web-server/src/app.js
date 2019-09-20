const path = require("path")
const express = require("express")
const hbs = require("hbs")

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
    res.send({
        forecast: "72 degress",
        location: "New York"
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

