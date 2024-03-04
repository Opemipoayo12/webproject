// Function to handle opening and closing the mobile menu
function myMenuFunction() {
    var menu = document.getElementById("myNavMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting
    // Get form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can perform further validation here if needed

    // For demonstration purposes, log the form data to the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clear the form inputs after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Optionally, you can add code to send the form data to a backend server or perform other actions
}

// Attach the handleSubmit function to the form submission event
document.getElementById('contact-form').addEventListener('submit', handleSubmit);
