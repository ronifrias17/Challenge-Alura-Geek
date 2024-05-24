async function listarProductos() {
    const conection = await fetch("http://localhost:3001/Productos");

    const convertConection = conection.json();

    return convertConection;
}


async function sendProduct(imagen, nombre, precio, id) {
    const conectionAPI = await fetch("http://localhost:3001/Productos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            imagen: imagen,
            nombre: nombre,
            precio: precio,
            id: id

        })

    });

    const convertConection = conectionAPI.json();

    if (!conectionAPI.ok) {
        throw new error("Ha ocurrido un error la enviar el video");
    }

    return convertConection;

}


async function borrarProducto(idProducto) {
    try {
        const conectionAPI = await fetch(`http://localhost:3001/Productos/${idProducto}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
        });

        if (!conectionAPI.ok) {
            throw new Error("Ha ocurrido un error al eliminar el producto");
        }
    } catch (error) {
        console.error("Error:", error);
        
    }
}



export const APIConection = {
    listarProductos, sendProduct, borrarProducto
}


