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

function getUserFromLocalStorage() {
  try {
    const userJSON = localStorage.getItem('user');
    if (userJSON) {
      const parsedUser = JSON.parse(userJSON);
      return parsedUser;
    } else {
      console.log('No user data found in localStorage');
      return null;
    }
  } catch (error) {
    console.error('Error retrieving user object:', error);
    return null;
  }
}

saveUserToLocalStorage(user);

const retrievedUser = getUserFromLocalStorage();
if (retrievedUser) {
  console.log('Retrieved user:', retrievedUser);
}
