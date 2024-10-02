
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Validación del nombre
    var nombre = document.getElementById('nombre').value;
    if (nombre === '') {
        alert('Por favor, ingresa tu nombre.');
        event.preventDefault();
        return;
    }

    // Validación del correo electrónico
    var email = document.getElementById('email').value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        event.preventDefault();
        return;
    }

    // Validación del mensaje
    var mensaje = document.getElementById('mensaje').value;
    if (mensaje === '') {
        alert('Por favor, ingresa tu mensaje.');
        event.preventDefault();
        return;
    }

    // Si todas las validaciones son correctas
    alert('Formulario enviado correctamente.');
});
