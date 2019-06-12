// Load in and save modules to variable
// Name of variable can be whatever
// However, what is in require needs to be a node module
// fs is standard of this name
// functions with Sync at the end are synchronous, otherwise asynchronous
const fs = require("fs")

// Creates notes.txt file when didn't exist
// Else it updated text
// fs.writeFileSync("notes.txt", "My name is Brian.")

// Challenge:
// 1. Append a message to notes.txt
// 2. Run the script
// 3. Check your work.

// Similar to reading, writing, appending to files in Python
fs.appendFileSync("notes.txt", "\nHere is some new text!\n")