// Class definition
class Person {
    constructor (name, surName){
        this.firstName=name;
        this.lastName=surName;
    }
}

const developer = new Person('Mario', 'Rossi');
console.log(`${developer.firstName} ${developer.lastName}`);