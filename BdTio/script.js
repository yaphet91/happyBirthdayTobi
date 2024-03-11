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
function addMessageU() {
  let messagei = document.getElementById("userMessage").value;
  if (messagei.trim() !== "") {
      let messageu = JSON.parse(localStorage.getItem("heartfeltMessages")) || [];
      messageu.push(messagei);
      localStorage.setItem("heartfeltMessages", JSON.stringify(messageu));
      displayMessages();
      document.getElementById("userMessage").value = ""; // Clear the textarea
  }
}

// Function to display messages
function displayMessages() {
  let messageu = JSON.parse(localStorage.getItem("heartfeltMessages")) || [];
  let messagesDiv = document.getElementById("existingMessages");
  messagesDiv.innerHTML = ""; // Clear previous messages
  messageu.forEach(function(messagei, index) {
      let messageDiv = document.createElement("div");
      messageDiv.classList.add("message");
      messageDiv.innerHTML = "<p>" + messagei + "</p><button class='btn user-Delet'; onclick='deleteMessage(" + index + ")'>Delete</button>";
      messagesDiv.appendChild(messageDiv);
  });
}

// Function to delete message
function deleteMessage(index) {
  let messageu = JSON.parse(localStorage.getItem("heartfeltMessages")) || [];
  messageu.splice(index, 1);
  localStorage.setItem("heartfeltMessages", JSON.stringify(messageu));
  displayMessages();
}

// Display messages on page load
displayMessages();


// Function to handle form submission
document.getElementById('guestbookForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  let name = document.getElementById('name').value;
  let message = document.getElementById('message').value;
  addMessage(name, message);
  saveMessageToDevice(name, message); // Function to save message on user's device
  //sendMessageToBestie(name, message);  Function to send message to your bestie
  this.reset(); // Reset the form after submission
});

// Function to add message to the guestbook
function addMessage(name, message) {
  let messageList = document.getElementById('messageList');
  let li = document.createElement('li');
  li.innerHTML = `<strong>${name}:</strong> ${message}`;
  messageList.appendChild(li);
  console.log(li);
}

// Function to save message on user's device (Using Local Storage)
function saveMessageToDevice(name, message) {
  let messages = JSON.parse(localStorage.getItem('guestbookMessages')) || [];
  messages.push({ name: name, message: message });
  localStorage.setItem('guestbookMessages', JSON.stringify(messages));
}

// Function to send message to your bestie (Example using console.log)
/*function sendMessageToBestie(name, message) {
  console.log(`Message sent to bestie: ${name} - ${message}`);
  // Implement actual sending functionality using relevant APIs and services for each platform (Instagram, email, etc.)
}*/
