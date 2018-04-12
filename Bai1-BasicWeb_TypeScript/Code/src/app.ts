import { Person } from "./peson";

class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Trang", "Quang", "Huynh");
var { firstName } = user;
var copy = {    
    ...user,
    firstName: 'huhu'
};

var array = [1,2,3];
var [first, ...rest] = array;

document.body.innerHTML = greeter(copy);