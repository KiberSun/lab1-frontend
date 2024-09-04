
let sendButton = document.querySelector('.send-button');
let textField = document.querySelector('.input-text');

sendButton.addEventListener('click', () => {
    fetch('http://localhost:8000/api', {
        method: "POST",
        body: textField.value
    });
    alert("Sent!");
});

