
function myMenuFunction() {
    var menu = document.getElementById("myNavMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


function handleSubmit(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

 
}
document.getElementById('contact-form').addEventListener('submit', handleSubmit);
