async function listarProductos() {
    const conection = await fetch("http://localhost:3001/Productos");

    const convertConection = conection.json();

    return convertConection;
}


async function sendProduct(imagen, nombre, precio) {
    const conectionAPI = await fetch("http://localhost:3001/Productos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            imagen: imagen,
            nombre: nombre,
            precio: precio,

        })

    });

    const convertConection = conectionAPI.json();

    if (!conectionAPI.ok) {
        throw new error("Ha ocurrido un error la enviar el video");
    }

    return convertConection;

}

async function deleteProduct(id) {
    const response = await fetch(`http://localhost:3001/Productos/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" }
    });

    if (!response.ok) {
        throw new Error("Ha ocurrido un error al borrar el producto");
    }

    return await response.json();
}

export const APIConection = {
    listarProductos, sendProduct, deleteProduct
}


