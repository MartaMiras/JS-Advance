const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const filteredPerson = {
  id: person.id,
  age: person.age,
};

//Object to JSON
const json = JSON.stringify(filteredPerson);

console.log(json); // Output: {"id":1,"age":25}
