#!/usr/bin/env node

function printName() {
    var name1 = "Gaurav";
    console.log(name1);
    name1 = "Dimple";
    console.log(name1);
}
// Will give error 
// console.log(name1);
printName();

//////////////////

const person = {
    name: 'Sarah',
    gender: 'female'
}

// not allowed as const value 
// person = {
//     name: 'Gaurav',
//     gender: 'male'
// }

person.name = 'Gaurav'
person.gender = 'male'

console.log(person)

///////////////////// Arrow Functions 

const integers = [1, 2, 3];

// const updatedInteger = integers.map(function (number) {
//     return number += 1
// });

const updatedInteger = integers.map(number => number += 1);
console.log(updatedInteger)

const updatedString = integers.map(() => "bob");
console.log(updatedString)

const ages = [23, 43, 2, 7]

const adults = ages.filter(age => age > 20)
console.log(adults)

////////////////////// Template strings 
{
    const name = 'Bill'
    const age = 35

    // ES5 syntax
    // const sentence = 'My name is ' + name + ', and I am ' + age + ' years old'
    // console.log(sentence);

    const sentence = ` My name is ${name}, and I am ${age} years old`
    console.log(sentence)
}

/////////////////// Protype Methods (Function constructors)
{
    // ES5 stuff-- no longer used
    function Person(name, age) {
        this.name = name
        this.age = age
    }

    Person.prototype.speak = function () {
        console.log(`Hi my name is ${this.name}`)
    }

    const bill = new Person('Bill', 56)
    console.log(bill)
    bill.speak()
}

/////////////////// ES6 Classes
{
    class Person {
        constructor(name, age, children) {
            this.name = name
            this.age = age
            this.children = children
        }
        speak() {
            console.log(`Hi my name is ${this.name}`)
        }
        birth(child) {
            this.children.push(child)
        }
    }

    const bill = new Person('bill', 20, ['sean', 'joseph'])
    bill.speak()
    bill.birth('jess')
    console.log(bill)
}

///////////////// Spread operator (can be used with arrays and objects)
{
    const names = ['james', 'bill']
    const moreNames = ['willam', 'paul', 'mike']

    //need output - ['James', 'Bill', 'jio', 'willam', 'paul', 'mike']

    // ES5 way of doing 
    // let allnames = []
    // allnames = allnames.concat(names)
    // allnames.push('jio')
    // allnames = allnames.concat(moreNames)
    // console.log(allnames)

    const allnames = [...names, 'jio', ...moreNames]
    console.log(allnames)
}
