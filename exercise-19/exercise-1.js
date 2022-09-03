const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;
person2.firstName = 'Simon';
// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);

/*Modificando l'oggetto `person2` viene modificato
anche l'oggetto `person1` poichè 
person2 è strettamente legato a person1,
quindi non sono due costanti distinte e separate*/