function greet(name){
    console.log('Hello '+name)
}

greet('world');

const myName = 'mar babu';

greet(myName);

function add(n1, n2){
    return n1+n2;
}

console.log(add(12, 16))

function sum(n){
    const summation = n.reduce(function(o, n){
        return o+n
    })
    return summation
}

console.log(sum([2,4,3]))
