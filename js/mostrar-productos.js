import { APIConection } from "./main.js";

const productList = document.querySelector("[data-lista]");

function cardCreate(_imagen_, _nombre_, _precio_, _id_) {
    const product = document.createElement("li");
    product.className = "product";
    product.innerHTML = `
                    <div class="product-img-content">
                        <img src="${_imagen_}" alt="" class="product-img">
                    </div>
                    <h2 class="product-name">
                        ${_nombre_}
                    </h2>
                    <div class="product-price">
                        <span>
                            $ ${_precio_},00
                        </span>
                        <img src="./img/Vector.png" alt="" class="product-listado" data-id="${_id_}">
                    </div>`;
    return product;
}

// async function listarProducto() {
//     try {
//         const listaAPI = await APIConection.listarProductos();
//         const listaProductos = await listaAPI; // Esperar a que se resuelva la promesa

//         listaProductos.forEach((_product_) => {
//             const cardElement = cardCreate(_product_.imagen, _product_.nombre, _product_.precio, _product_.id);
//             productList.appendChild(cardElement);
//         });
//     } catch (error) {
//         productList.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexión :(</h2>`;
//     }

//     const productos = document.querySelectorAll("[data-id]");
//     productos.forEach((_product_) => {
//         _product_.addEventListener("click", async () => {
//             const productId = _product_.dataset.id || _product_.getAttribute("data-id");
//             await APIConection.borrarProducto(productId); // Esperar a que se resuelva la promesa
//         });
//     });
// }

// async function listarProducto() {
//     try {
//         const listaAPI = await APIConection.listarProductos();
//         const listaProductos = await listaAPI;

//         listaProductos.forEach((_product_) => {
//             const cardElement = cardCreate(_product_.imagen, _product_.nombre, _product_.precio, _product_.id);
//             productList.appendChild(cardElement);
//         });
//     } catch (error) {
//         console.error('Error al listar productos:', error.message);
//         productList.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexión :(</h2>`;
//     }

//     const productos = document.querySelectorAll("[data-id]");
//     productos.forEach((_product_) => {
//         _product_.addEventListener("click", async () => {
//             const productId = _product_.dataset.id || _product_.getAttribute("data-id");
//             try {
//                 await APIConection.borrarProducto(productId);
//                 console.log('Producto eliminado exitosamente');
//                 // Opcionalmente, remover el producto de la lista en el DOM
//                 _product_.parentElement.remove();
//             } catch (error) {
//                 console.error('Error al eliminar el producto:', error.message);
//                 alert('No se pudo eliminar el producto. Por favor, intenta de nuevo.');
//             }
//         });
//     });
// }

async function listarProducto() {
    try {
        const listaAPI = await APIConection.listarProductos();
        const listaProductos = await listaAPI; // Esperar a que se resuelva la promesa

        listaProductos.forEach((_product_) => {
            const cardElement = cardCreate(_product_.imagen, _product_.nombre, _product_.precio, _product_.id);
            productList.appendChild(cardElement);
        });
    } catch (error) {
        console.error('Error al listar productos:', error.message);
        productList.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexión :(</h2>`;
    }

    const productos = document.querySelectorAll("[data-id]");
    productos.forEach((_product_) => {
        _product_.addEventListener("click", async () => {
            const productId = _product_.dataset.id || _product_.getAttribute("data-id");
            try {
                await APIConection.borrarProducto(productId);
                console.log('Producto eliminado exitosamente');
                // Remover el producto del DOM
                _product_.remove();
            } catch (error) {
                console.error('Error al eliminar el producto:', error.message);
                alert('No se pudo eliminar el producto. Por favor, intenta de nuevo.');
            }
        });
    });
}

listarProducto();