// Part One
// Load in and save modules to variable
// Name of variable can be whatever
// However, what is in require needs to be a node module
// fs is standard of this name
// functions with Sync at the end are synchronous, otherwise asynchronous
// const fs = require("fs")

// Creates notes.txt file when didn't exist
// Else it updated text
// fs.writeFileSync("notes.txt", "My name is Brian.")

// Challenge:
// 1. Append a message to notes.txt
// 2. Run the script
// 3. Check your work.

// Similar to reading, writing, appending to files in Python
// fs.appendFileSync("notes.txt", "\nHere is some new text!\n")

// Part 2 Importing/Exporting Variables:
// const add = require("./utils.js")

// const sum = add(4, -2)

// console.log(sum)

// Challenge: Define and use function in a new file
// 1. Create notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Expore getNotes function
// 4. From app.js, load in and call function

const notes = require("./notes.js")
console.log(notes())