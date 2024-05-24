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
                        <img src="./img/Vector.png" alt="" data-id="${id}">
                    </div>`

    return product;

}


async function listarProducto() {

    try {

        const listaAPI = await APIConection.listarProductos();

        listaAPI.forEach(product => productList.appendChild(cardCreate(product.imagen, product.nombre, product.precio)));

    }
    catch {
        productList.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion :(</h2>`;
    }
}

listarProducto();