// Log a message to verify the script is working
console.log("JavaScript is successfully linked!");

// Function to toggle a dropdown menu
function toggleDropdown() {
  const dropdown = document.querySelector(".dropdown-menu");
  if (dropdown) {
    dropdown.classList.toggle("show");
  }
}

// Add event listener for dropdown toggle
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  if (dropdownToggle) {
    dropdownToggle.addEventListener("click", toggleDropdown);
  }
});

// Function to display a notification
function showNotification(message) {
  alert(message || "This is a default notification.");
}

// Example of handling a button click
document.addEventListener("DOMContentLoaded", function () {
  const notifyButton = document.querySelector(".notify-btn");
  if (notifyButton) {
    notifyButton.addEventListener("click", function () {
      showNotification("Button clicked! JavaScript is active.");
    });
  }
});

