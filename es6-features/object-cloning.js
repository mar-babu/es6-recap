const person = {
    fname: 'Mar',
    lname: 'Babu'
}

const anotherPerson = Object.assign({}, person)
anotherPerson.fname = 'Mohammad'
anotherPerson.lname = 'Zayaan'
console.log(person, anotherPerson)