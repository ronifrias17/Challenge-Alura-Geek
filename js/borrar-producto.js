import { deleteProduct } from './main.js';

const borrar = document.querySelector("[data-borrar]");

async function handleDeleteProduct(event) {
    event.preventDefault();

    const id = event.target.dataset.id; // Asumiendo que el botón tiene un atributo `data-id` con el ID del producto

    try {
        const result = await deleteProduct(id);
        console.log('Producto borrado:', result);
    } catch (e) {
        alert(`Error: ${e.message}`);
    }
}

borrar.addEventListener("click", handleDeleteProduct);
