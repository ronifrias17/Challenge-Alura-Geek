// Conexion con el servidor para las peticiones "GET", "POST" y "DELETE"

async function listarProductos() {
    const conection = await fetch("https://fake-api-ten-azure.vercel.app/Productos");
    const convertConection = await conection.json(); // Esperar a que se resuelva la promesa
    return convertConection;
}

async function sendProduct(imagen, nombre, precio, id) {
    const conectionAPI = await fetch("https://fake-api-ten-azure.vercel.app/Productos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            imagen: imagen,
            nombre: nombre,
            precio: precio,
            id: id
        })
    });

    const convertConection = await conectionAPI.json(); // Esperar a que se resuelva la promesa

    if (!conectionAPI.ok) {
        throw new Error("Ha ocurrido un error la enviar el producto");
    }

    return convertConection;
}

async function borrarProducto(idProducto) {
    try {
        const conectionAPI = await fetch(`https://fake-api-ten-azure.vercel.app/Productos/${idProducto}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
        });

        if (!conectionAPI.ok) {
            throw new Error("Ha ocurrido un error al eliminar el producto");
        }

    } catch (error) {
        throw error;
    }

}


// Validacion de los campos del formulario

function validarNombre(nombre) {
    const regex = /^[a-zA-Z]+(?: [a-zA-Z]+)?$/;
    return regex.test(nombre) && nombre.split(" ").length <= 2;
}

function validarPrecio(precio) {
    const regex = /^\d{1,4}$/;
    return regex.test(precio);
}

function validarImagen(imagen) {
    try {
        new URL(imagen);
        return true;
    } catch (e) {
        return false;
    }
}




export const APIConection = { listarProductos, sendProduct, borrarProducto }
export const validation = { validarNombre, validarPrecio, validarImagen }