burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navItems = document.querySelector('.nav-items');
button = document.querySelector('.button');

burger.addEventListener('click',()=>{
  navItems.classList.toggle('v-class');
  button.classList.toggle('v-class');
  navbar.classList.toggle('h-class');
});


// Function to add message
function addMessage() {
  let message = document.getElementById("userMessage").value;
  if (message.trim() !== "") {
      let messages = JSON.parse(localStorage.getItem("heartfeltMessages")) || [];
      messages.push(message);
      localStorage.setItem("heartfeltMessages", JSON.stringify(messages));
      displayMessages();
      document.getElementById("userMessage").value = ""; // Clear the textarea
  }
}

// Function to display messages
function displayMessages() {
  let messages = JSON.parse(localStorage.getItem("heartfeltMessages")) || [];
  let messagesDiv = document.getElementById("existingMessages");
  messagesDiv.innerHTML = ""; // Clear previous messages
  messages.forEach(function(message, index) {
      let messageDiv = document.createElement("div");
      messageDiv.classList.add("message");
      messageDiv.innerHTML = "<p>" + message + "</p><button class='btn'; onclick='deleteMessage(" + index + ")'>Delete</button>";
      messagesDiv.appendChild(messageDiv);
  });
}

// Function to delete message
function deleteMessage(index) {
  let messages = JSON.parse(localStorage.getItem("heartfeltMessages")) || [];
  messages.splice(index, 1);
  localStorage.setItem("heartfeltMessages", JSON.stringify(messages));
  displayMessages();
}

// Display messages on page load
displayMessages();