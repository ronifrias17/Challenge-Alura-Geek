import { APIConection } from "./main.js";

const productList = document.querySelector("[data-lista]");

function cardCreate(imagen, nombre, precio, id) {
    const product = document.createElement("li");
    product.className = "product";
    product.innerHTML = `
                    <div class="product-img-content">
                        <img src="${imagen}" alt="" class="product-img">
                    </div>
                    <h2 class="product-name">
                        ${nombre}
                    </h2>
                    <div class="product-price">
                        <span>
                            $ ${precio},00
                        </span>
                        <img src="./img/Vector.png" alt="" class="product-listado" data-id="${id}">
                    </div>`;
    return product;
}


async function listarProducto() {
    try {
        const listaAPI = await APIConection.listarProductos();
        const listaProductos = await listaAPI; // Esperar a que se resuelva la promesa

        listaProductos.forEach((product) => {
            const cardElement = cardCreate(product.imagen, product.nombre, product.precio, product.id);
            productList.appendChild(cardElement);
        });
    } catch (error) {
        console.error('Error al listar productos:', error.message);
        productList.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexión :(</h2>`;
    }

    const productos = document.querySelectorAll("[data-id]");
    productos.forEach((product) => {
        product.addEventListener("click", async () => {
            const productId = product.dataset.id || product.getAttribute("data-id");
            try {
                await APIConection.borrarProducto(productId);
                console.log('Producto eliminado exitosamente');
                // Remover el producto del DOM
                product.remove();
            } catch (error) {
                console.error('Error al eliminar el producto:', error.message);
                alert('No se pudo eliminar el producto. Por favor, intenta de nuevo.');
            }
        });
    });
}

listarProducto();