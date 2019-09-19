const path = require("path")
const express = require("express")

const app = express()
const publicDirectoryPath = path.join(__dirname, "../public") 

app.set("view engine", "hbs")

app.use(express.static(publicDirectoryPath))

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
        message: "You are now on the help page."
    })
})

app.get("", (req, res) => {
    res.render("index", {
        title: "Weather",
        name: "Brian DiRito"
    })
})

app.listen(3000, () => {
    console.log("Server is up on port 3000")
})

