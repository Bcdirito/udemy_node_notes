console.log("Starting")

// Will happen last
setTimeout(() => {
    console.log("2 Second Timer")
}, 2000)

setTimeout(() => {
    console.log("0 Second Timer")
}, 0)

console.log("Stopping")


// Order:
// Starting
// Stopping
// 0 Second Timer
// 2 Second Timer

// setTimeout won't run until the call stack is empty.
// This is because it is part of the Callback Queue