// main.js

import { validation } from './main.js';

document.querySelector('[data-form]').addEventListener('submit', function (event) {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Obtener los valores de los inputs
    const nombre = document.querySelector('[data-nombre]').value.trim();
    const precio = document.querySelector('[data-precio]').value.trim();
    const imagen = document.querySelector('[data-imagen]').value.trim();

    // Obtener los elementos de mensaje de error
    const errorNombre = document.getElementById('error-nombre');
    const errorPrecio = document.getElementById('error-precio');
    const errorImagen = document.getElementById('error-imagen');

    // Limpiar mensajes de error anteriores
    errorNombre.textContent = '';
    errorPrecio.textContent = '';
    errorImagen.textContent = '';

    // Validar nombre
    const nombreValido = validation.validarNombre(nombre);
    if (!nombreValido) {
        errorNombre.textContent = 'El nombre debe tener máximo dos palabras, sin números y solo un espacio entre ellas.';
        return;
    }

    // Validar precio
    const precioValido = validation.validarPrecio(precio);
    if (!precioValido) {
        errorPrecio.textContent = 'El precio debe ser un valor numérico de máximo 4 cifras.';
        return;
    }

    // Validar imagen (URL)
    const imagenValida = validation.validarImagen(imagen);
    if (!imagenValida) {
        errorImagen.textContent = 'La imagen debe ser una URL válida.';
        return;
    }

});

