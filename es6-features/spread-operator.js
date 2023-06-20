// function sum(n1,n2,n3){
//     return n1+n2+n3
// }

function sum(x,y,...numbers){
    return numbers.reduce((o,n) => o+n)
}

const result = sum(1,2,3,4)
console.log(result)
