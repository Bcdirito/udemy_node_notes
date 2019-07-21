const fs = require("fs")

// This code writes to the corresponding JSON file
// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holday"
// }

// const bookJSON = JSON.stringify(book)

// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)

// console.log(parsedData.author)

// fs.writeFileSync("1-json.json", bookJSON)

// const dataBuffer = fs.readFileSync("1-json.json")

// Converts data from bytes to string
// const dataJSON = dataBuffer.toString()

// From JSON to String
// const data = JSON.parse(dataJSON)

// console.log(data.title)


const initialData = fs.readFileSync("1-json.json")

const jsonBytes = initialData.toString()

const jsonString = jsonBytes.toString()

const jsonData = JSON.parse(jsonString)

jsonData.name = "Brian"
jsonData.age = 28

console.log(jsonData)

const newJSON = JSON.stringify(jsonData)

fs.writeFileSync("1-json.json", newJSON)