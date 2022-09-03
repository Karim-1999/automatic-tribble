function getKeys(obj) {
 
  for(let prop in person) {
       return(Object.keys(person))
  }

}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);
