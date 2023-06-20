const functionName = (param1, param2) => {

}

const greet = (name) => {
    console.log('Hello '+name)
}

greet('world');

const add = (n1, n2) => {
    return n1+n2;
}

const addv2 = (n1, n2) => n1+n2

console.log(addv2(12, 16))

const sum = (n) => {
    return n.reduce(function(o, n){
        return o+n
    })
}

const sumv2 = (n) => {
    return n.reduce((o,n) => o+n)
}

const sumv3 = (n) => n.reduce((o,n) => o+n)

console.log(sumv3([2,3,4]))

const revString = (str) => str.split('').reverse().join('');

console.log(revString('Hi, How Are You?'))
