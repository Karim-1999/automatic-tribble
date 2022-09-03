const person = {
  set setFirstName(name){
      this.firstName = name
  },

  get getFirstName(){
      return this.firstName
  },

  set setLastName(name){
      this.lastName = name
  },

  get getLastName(){
      return this.lastName
  },

  fullName(){
      return this.firstName + " " + this.lastName
  }
}

const john = {
    firstName : "John",
    lastName  : "Doe",
    fullName(){
        return this.firstName + " " + this.lastName
    }
}

const simon = {
    firstName : "Simon",
    lastName  : "Collins",
    fullName(){
        return this.firstName + " " + this.lastName
    }
}

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins

// get serve a ritornare la proprietà
// set serve a modificare/impostare la proprietà