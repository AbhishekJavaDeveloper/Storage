// Retrieve the form element and the user list element
const form = document.getElementById("my-form");
const userList = document.getElementById("users");

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the user details from the form inputs
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Check if the user has entered both name and email
  if (name.trim() === "" || email.trim() === "") {
    // Show an error message if either field is empty
    showMessage("Please enter both name and email.", "error");
    return;
  }

  // Create an object to represent the user
  const user = {
    name,
    email,
  };

  // Save the user details to local storage
  saveUserToLocalStorage(user);

  // Clear the form inputs after saving
  form.reset();

  // Update the user list on the page
  updateUserList();
}

// Function to save the user to local storage
function saveUserToLocalStorage(user) {
  // Check if there are any existing users in local storage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Add the new user to the array of users
  users.push(user);

  // Save the updated user array back to local storage
  localStorage.setItem("users", JSON.stringify(users));
}

// Function to display messages on the page
function showMessage(message, className) {
  const messageDiv = document.querySelector(".msg");
  messageDiv.textContent = message;
  messageDiv.className = `msg ${className}`;

  // Clear the message after 3 seconds
  setTimeout(() => {
    messageDiv.textContent = "";
    messageDiv.className = "msg";
  }, 3000);
}

// Function to update the user list on the page
function updateUserList() {
  userList.innerHTML = ""; // Clear the current list

  // Retrieve the users from local storage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Create and append list items for each user
  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `Name: ${user.name}, Email: ${user.email}`;
    userList.appendChild(li);
  });
}

// Event listener for form submission
form.addEventListener("submit", handleFormSubmit);

// When the page loads, update the user list from local storage
updateUserList();
