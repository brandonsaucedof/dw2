/*
Descripción: js para el formulario de contactos para guardar en un array y borrar con un boton el array.
Desarrollador: [brandon saucedo]
Fecha: 2024-04-24
Cambios: Ninguno
*/

// Array para almacenar datos del formulario
var formDataArray = [];
// Función para mostrar formulario con datos almacenados
function mostrarDatosFormulario() {
    // Generar contenido HTML para mostrar datos del array
    var formContent = '<h2>Datos del formulario</h2>';
    formDataArray.forEach(function(formData, index) {
        formContent += 
            '<div class="form-data">' +
                '<p><strong>Nombre:</strong> ' + formData.name + '</p>' +
                '<p><strong>Email:</strong> ' + formData.email + '</p>' +
                '<p><strong>Asunto:</strong> ' + formData.subject + '</p>' +
                '<p><strong>Mensaje:</strong> ' + formData.message + '</p>' +
            '</div>';
    });

    // Agregar botón de confirmación fuera del bucle forEach
    formContent += '<button type="button" class="btn btn-primary" onclick="showThankYouMessage()">Enviar</button>';

    // Mostrar formulario con datos del array
    document.getElementById('formData').innerHTML = formContent;
}
function capturarDatosFormulario() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var formData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    formDataArray.push(formData);

    console.log(formDataArray); // Para verificar si se están capturando los datos correctamente
}
function showThankYouMessage() {
    // Mostrar mensaje de agradecimiento
    document.getElementById('thankYouMessage').style.display = 'block';

    // Limpiar campos del formulario
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';

    // Ocultar formulario con datos del array
    document.getElementById('formData').innerHTML = '';
}
