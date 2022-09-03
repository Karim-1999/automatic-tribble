const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

for(let values in person){
  if (typeof(person[values]) === 'string') {
    person[values] = undefined
  }
}

const json = JSON.stringify(person);

console.log(json); // Should return: { id: 1, age: 25 }