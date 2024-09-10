
let sendButton = document.querySelector('.send-button');
let inputField = document.querySelector('.input-field');
let receiveButton = document.querySelector('#receive-button');
let outputField = document.querySelector('#output-field');


sendButton.addEventListener('click', () => {
    fetch('http://localhost:8000/api', {
        method: "POST",
        body: textField.value
    });
    alert("Sent");
});

receiveButton.addEventListener('click', () => {
    await fetch('http://localhost:8000/api').then((response) => {
        outputField.value = response.body;
    });
});