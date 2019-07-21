const fs = require("fs")
const chalk = require("chalk")

function getNotes() {
    return "Your notes..."
}

const addNote = (ttl, bdy) => {
    const notes = loadNotes()
    
    const filterNotes = notes.filter(note => {
        return note.title !== ttl
    })

    if (filterNotes.length === notes.length) {
        notes.push({
            title: ttl,
            body: bdy
        })
        
        saveNotes(notes)
        console.log("New note added!")
    } else console.log("Note was a duplicate!")
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (err) {
        return []
    }
}

const saveNotes = (notesArr) => {
    fs.writeFileSync("notes.json", JSON.stringify(notesArr))
}

const removeNote = (ttl) => {
    const notes = loadNotes()

    const filterNotes = notes.filter(note => {
        return note.title !== ttl
    })

    if (filterNotes.length < notes.length){
        saveNotes(filterNotes)
        console.log(chalk.bgKeyword("green")("Note removed"))
    } else console.log(chalk.bgKeyword("red")("Note could not be found!"))
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
