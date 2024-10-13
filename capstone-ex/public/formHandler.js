const form = document.getElementById('playerForm');

const firstName = documet.getElementById('firstName').value;
const lastName = documet.getElementById('lastName').value;

const response = await fetch('/register-player', {
    method: 'POST',
    headers: {
        'Content': 'application/json'
    },
});

const result = await response.json();

const message = document.getElementById('result');
message.textContent = result.message;