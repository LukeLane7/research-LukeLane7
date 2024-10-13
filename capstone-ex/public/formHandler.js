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
    // const message = document.getElementById('result');
    // message.textContent = result.message;
    } catch (error) {
        console.error('Error:', error);
    }
}