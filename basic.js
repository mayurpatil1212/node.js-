let a = 10
console.log(typeof a)

a = 'This is some text'
console.log(typeof a)

a = true
console.log(typeof a)

a = undefined
console.log(typeof a)

const company = {
    name: 'Tata',
    address: 'Pimpri Chinchwad',
    contact: '+911234567890',
    email: 'hello@tata.com'
}

console.log('Information of the company: ', company)

function multiplication(first, second) {
    return first * second
}

console.log('Multiplication of two numbers is ', multiplication(10, 23))

function hello() {
    console.log('Hello World!')
}
setTimeout(hello, 2000)