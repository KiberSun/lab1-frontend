
const sendButton = document.querySelector('#send-button');
const inputField = document.querySelector('#input-field');
const receiveButton = document.querySelector('#receive-button');
const outputField = document.querySelector('#output-field');


sendButton.addEventListener('click', () => {
    alert("button clicked");
    fetch('http://localhost:8000/api', {
        method: "POST",
        body: textField.value
    });
    alert("Sent!");
});

receiveButton.addEventListener('click', () => {
    fetch('http://localhost:8000/api').then((response) => {
        outputField.value = response.body;
    });
    
});