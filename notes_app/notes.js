const fs = require("fs")
const chalk = require("chalk")

const addNote = (ttl, bdy) => {
    const notes = loadNotes()
    
    const duplicateNote = notes.find(note => note.title === ttl)

    if (!duplicateNote) {
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

    const targetNote = notes.find(note => note.title !== ttl
    )

    if (targetNote){
        saveNotes(filterNotes)
        console.log(chalk.bgKeyword("green")("Note removed"))
    } else console.log(chalk.bgKeyword("red")("Note could not be found!"))
}

const listNotes = () => {
    const notes = loadNotes()

    if (notes.length > 0){
        notes.forEach(note => {
            console.log(chalk.bgKeyword("blue")(note.title))
        })
    } else console.log(chalk.bgKeyword("red")("No notes found!"))
}

const readNote = (ttl) => {
    const notes = loadNotes()
    const targetNote = notes.find(note => note.title === ttl)

    if (targetNote) console.log(`${chalk.bgKeyword("blue")(targetNote.title)}: ${targetNote.body}`)
    else console.log(chalk.bgKeyword("red")("Note not found!"))
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
