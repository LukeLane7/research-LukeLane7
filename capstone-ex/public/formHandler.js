async function submitForm(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    try{

        const response = await fetch('/register-player', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName}),
        });

        const result = await response.json();

        document.getElementById('resultMessage').textContent = result.message;
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';

        addPlayerToList(firstName, lastName);
    // const message = document.getElementById('result');
    // message.textContent = result.message;
    } catch (error) {
        console.error('Error:', error);
    }
}

function addPlayerToList(firstName, lastName) {
    const playerList = document.getElementById('playerList');
    const li = document.createElement('li');
    li.textContent = `${firstName} ${lastName}`;
    playerList.appendChild(li);
}