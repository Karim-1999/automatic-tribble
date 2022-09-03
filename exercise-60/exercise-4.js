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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here
function fetchPersonById (id){
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      const personById = persons.find(person => person.id === id)

      if (personById) {
        return resolve (personById)
      }
      else{
        return reject(new Error('This ID not assigned to any person.'))
      }
  }, 1000)
  })
}

function fetchJobById (id){
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      const jobById = jobs.find(job => job.id === id)

      if (jobById) {
        return resolve (jobById)
      }
      else{
        return reject(new Error('This ID not assigned to any person.'))
      }
  }, 1000)
  })
}

Promise.all([fetchPersonById(2), fetchJobById(2)])
.then(((value) => console.log(value)))
.catch((error) => console.log(error))

