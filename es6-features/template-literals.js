const fname = 'mar'
const lname = 'babu'

//const output = 'His name is ' + fname + ' ' + lname
//console.log(output)

const output2 = `His name is ${fname} ${lname}`
console.log(output2)

const p1 = 12
const p2 = 16

const sayHi = () => {
    return 'Done'
}

console.log('Total price is ' + p1 ,'+ ' + p2 + ' = ' + (p1+p2))
console.log(`Total price is ${p1} + ${p2} = ${p1+p2} ${sayHi()}`)
