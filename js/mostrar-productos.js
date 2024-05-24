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
                    </div>`

    return product;

}


async function listarProducto() {
    try {
        const listaAPI = await APIConection.listarProductos();

        listaAPI.forEach((_product_) => {
            const cardElement = cardCreate(_product_.imagen, _product_.nombre, _product_.precio, _product_.id);
            productList.appendChild(cardElement);
        });
    } catch (error) {
        productList.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexión :(</h2>`;
    }

    const productos = document.querySelectorAll("[data-id]");

    productos.forEach((_product_) => {
        _product_.addEventListener("click", () => {
            const productId = _product_.dataset.id || _product_.getAttribute("data-id");
            APIConection.borrarProducto(productId);
        });
    });
}



listarProducto();

