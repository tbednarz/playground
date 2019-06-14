// const square = (x) => {
//     return x * x
// }

// const square = (x) => x*x


// console.log(square(100))


const event = {
    name: 'Birthday Party',
    guestList: ["Tres", 'Jen', 'Mike'],
    printGuestList() {
        console.log("guest list for " + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + " is attending " + this.name)
        })
    }
}

event.printGuestList()
