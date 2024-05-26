async function listarProductos() {
    const conection = await fetch("https://fake-api-ten-azure.vercel.app/Productos");
    const convertConection = await conection.json(); // Esperar a que se resuelva la promesa
    return convertConection;
}

async function sendProduct(_imagen_, _nombre_, _precio_, _id_) {
    const conectionAPI = await fetch("https://fake-api-ten-azure.vercel.app/Productos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            imagen: _imagen_,
            nombre: _nombre_,
            precio: _precio_,
            id: _id_
        })
    });

    const convertConection = await conectionAPI.json(); // Esperar a que se resuelva la promesa

    if (!conectionAPI.ok) {
        throw new Error("Ha ocurrido un error la enviar el video");
    }

    return convertConection;
}

async function borrarProducto(_idProducto_) {
    try {
        const conectionAPI = await fetch(`https://fake-api-ten-azure.vercel.app/Productos/${_idProducto_}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
        });

        if (!conectionAPI.ok) {
            throw new Error("Ha ocurrido un error al eliminar el producto");
        }
        // No lanzar un error si la operación es exitosa
    } catch (error) {
        throw error; // Lanzar el error en lugar de solo imprimirlo
    }
}

export const APIConection = {
    listarProductos, sendProduct, borrarProducto
}