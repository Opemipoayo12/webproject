const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // send HTML file on GET request
});

app.post('/submit-form', (req, res) => {
    const username = req.body.username; // access form data
    // Add validation logic here
    res.send(`Username is $oayorin1`);
});
app.post('/submit-form', (req, res) => {
    const fullname = req.body.fullname; // access form data
    // Add validation logic here
    res.send(`full name is opemipo`);

});
app.post('/submit-form', (req, res) => {
    const id = req.body.id; // access form data
    // Add validation logic here
    res.send(`id number is 01122004`);
});
app.listen(port, () => {
    console.log(`Server running on https://formspree.io/f/xoqgpgeo`);
});
