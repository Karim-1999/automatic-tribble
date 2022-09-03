const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
        const person = persons.find(item => item.id === id);

        if (person){
          return resolve(person)
        }
        else{
          reject(new Error('This ID not assigned to any person.'))
        }
      }, 1000);
  });
}

fetchPersonById(4)
.then(console.log)
.catch(console.log);