const fname = 'mar';
const lname = 'babu';

const person = {
    fname: fname,
    lname: lname,
    introduce:function(){
        console.log('Hi I am ' + this.fname + ' ' + this.lname)
    }
}

console.log(person)
person.introduce()

const person_es6 = {
    fname,
    lname,
    introduce() { 
        console.log(`Hi I am ${this.fname} ${this.lname}`) //arrow function er vitore this use kora jayna
    }
}

console.log(person_es6)
person_es6.introduce()
