import { APIConection, validation } from './main.js';

const form = document.querySelector("[data-form]");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const imagen = document.querySelector("[data-imagen]").value.trim();
    const nombre = document.querySelector("[data-nombre]").value.trim();
    const precio = document.querySelector("[data-precio]").value.trim();

    const errorNombre = document.getElementById('error-nombre');
    const errorPrecio = document.getElementById('error-precio');
    const errorImagen = document.getElementById('error-imagen');

    errorNombre.textContent = '';
    errorPrecio.textContent = '';
    errorImagen.textContent = '';

    const nombreValido = validation.validarNombre(nombre);
    const precioValido = validation.validarPrecio(precio);
    const imagenValida = validation.validarImagen(imagen);

    if (!nombreValido) {
        errorNombre.textContent = 'El nombre debe tener máximo dos palabras, sin números y solo un espacio entre ellas.';
        return;
    }

    if (!precioValido) {
        errorPrecio.textContent = 'El precio debe ser un valor numérico de máximo 4 cifras.';
        return;
    }

    if (!imagenValida) {
        errorImagen.textContent = 'La imagen debe ser una URL válida.';
        return;
    }


    try {
        await APIConection.sendProduct(imagen, nombre, precio);
        alert("Producto enviado correctamente!");
        // form.reset(); // Limpiar el formulario después de enviarlo
    } catch (e) {
        alert(`Error al enviar el producto: ${e.message}`);
    }
});
