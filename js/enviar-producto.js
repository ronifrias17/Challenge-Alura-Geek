import { APIConection } from "./main.js";

const enviar = document.querySelector("[data-enviar]");

async function sendProduct(event) {

    event.preventDefault();

    const imagen = document.querySelector("[data-imagen]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;


    try {

        await APIConection.sendProduct(imagen, nombre, precio);

    } catch (e) {
        alert(e);

    }

}

enviar.addEventListener("click", event => sendProduct(event));