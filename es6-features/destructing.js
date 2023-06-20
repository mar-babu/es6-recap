const data = [12,4,16,9,23]

//const [a,b,c,d,e,f] = data
const [a,b,d,...c] = data

console.log(a,b,c,d)

const person = {
    fname: 'mar',
    lname: 'babu',
    age: '27',
    sex: 'M'
}

const {fname, lname, ...rest} = person
console.log(fname, lname, rest)
console.log(rest.age)

function getData(){
    const country = 'Bangladesh'
    const capital = 'Dhaka'

    return {country, capital}
}

const details = getData()
console.log(details);

const {country, capital} = getData()
console.log(country)
console.log(capital)
