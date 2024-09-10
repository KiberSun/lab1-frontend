
let sendButton = document.querySelector('#send-button');
let inputField = document.querySelector('#input-text');
let receiveButton = document.querySelector('#receive-button');
let outputField = document.querySelector('#output-text');


sendButton.addEventListener('click', () => {
    fetch('http://localhost:8000/api', {
        method: "POST",
        body: inputField.value
    });
    alert("Sent");
});


receiveButton.addEventListener('click', async () => {
        try {
            let res = await fetch('http://localhost:8000/api', {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            });
            if (!res.ok) {
                throw new Error('Network response was not ok ' + res.statusText);
            }
            outputField.value = await res.text();
        } catch (error) {
            console.error('Ошибка запроса:', error);
        }
});

