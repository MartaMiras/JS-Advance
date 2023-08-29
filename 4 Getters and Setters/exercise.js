class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  // Getter
  get firstName() {
    return this._firstName;
  }

  // Setter
  set firstName(newFirstName) {
    this._firstName = newFirstName;
  }

  // Getter
  get lastName() {
    return this._lastName;
  }

  // Setter
  set lastName(newLastName) {
    this._lastName = newLastName;
  }

  // Getter
  get age() {
    return this._age;
  }

  // Setter
  set age(newAge) {
    this._age = newAge;
  }

  // Getter
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName); // Output: Mario Rossi

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName); // Output: Maria Verdi
