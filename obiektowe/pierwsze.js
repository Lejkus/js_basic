// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastname = lastName;
// }

// //dziedziczenie prototypowe czyli działa to tak samo ale wywołuje sie raz ta funkcja

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastname}`;
// };

// var jan = new Person("Jan","Kowalski");
// var anna = new Person("Anna","Nowak");

// //console.log(jan);


// //w objektach nie ma tej funkcji
// console.log(jan, anna);

// //a sie wywołuje 
// console.log(jan.getFullName(), anna.getFullName());

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastname = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastname}`;
    }
}

var jan = new Person("Jan","Kowalski");
console.log(jan.getFullName());
