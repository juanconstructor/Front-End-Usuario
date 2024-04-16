// Mostrar que el mensaje se ha enviado.
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('successModal').style.display = 'block';
});

// Para dar clic "Continuar".
document.getElementById('continueButton').addEventListener('click', function() {
    document.getElementById('successModal').style.display = 'none';
});