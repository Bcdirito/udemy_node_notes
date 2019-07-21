// const square = (x) => {
//     return x**2
// }

// const square = (x) => x**2

// console.log(square(square(3))) // returns 81

const event = {
    name: "Birthday Party",
    guestList: ["Brian", "Marty", "Jon"],
    printGuestList() {
        console.log(`Guest list for ${this.name}`)

        this.guestList.forEach(guest => {
            console.log(`${guest} will be attending ${this.name}`)
        })
    }
}

event.printGuestList()