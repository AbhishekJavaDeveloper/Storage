document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('my-form');
  const usersList = document.getElementById('users');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    const name = nameInput.value;
    const email = emailInput.value;

    if (name.trim() === '' || email.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    const user = {
      name: name,
      email: email,
    };


    let users = JSON.parse(localStorage.getItem('users')) || [];

    users.push(user);

  
    localStorage.setItem('users', JSON.stringify(users));

    nameInput.value = '';
    emailInput.value = '';

    displayUsers(users);
  });

  function displayUsers(users) {
    usersList.innerHTML = '';

    users.forEach(function (user, index) {
      const listItem = document.createElement('li');
      listItem.textContent = `${index + 1}. Name: ${user.name}, Email: ${user.email}`;
      usersList.appendChild(listItem);
    });
  }

  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  displayUsers(storedUsers);
});
