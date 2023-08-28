const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserToLocalStorage(userObject) {
  try {
    const userJSON = JSON.stringify(userObject);
    localStorage.setItem('user', userJSON);
    console.log('User object saved to localStorage');
  } catch (error) {
    console.error('Error saving user object:', error);
  }
}

saveUserToLocalStorage(user);
