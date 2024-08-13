// Syntax: setInterval(function, Time in milliseconds to repeat)

let time = setInterval(timer, 1000)

function timer() {
    let date = new Date()
    return console.log(date.toLocaleTimeString())
}

// Syntax: setTimeout(callback function, Time in milliseconds)

setTimeout(() => {
    console.log('This message appears after 4 seconds')
    clearInterval(time)
}, 4000)

