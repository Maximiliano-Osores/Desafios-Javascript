import { productos } from "./stock.js";

// Array vacio para los productos
let carrito = [];

const itemsEnCarrito = document.getElementById('carrito-items');

export function agregarAlCarrito(id) {
    const item = productos.find((producto) => producto.id === id)

    carrito.some((item) => item.id === id) ? item.cantidad++ : carrito.push(item);
    
    localStorage.setItem('carritoLocal', JSON.stringify(carrito))

    actualizarCarrito();
}
// Condicional para llamar a los productos guardados en el localStorage
localStorage.getItem('carritoLocal') && JSON.parse(localStorage.getItem('carritoLocal'))

actualizarCarrito();

function actualizarCarrito() {
    productosEnCarrito();
}

// Funcion para agregar los items mediante uso del DOM
function productosEnCarrito() {
    itemsEnCarrito.innerHTML = "";
    carrito.forEach((producto) => {
        itemsEnCarrito.innerHTML += `
 <div class="item-carrito">
 <div class="item-info">
     <img src="${producto.img}" alt="${producto.nombre}">
     <h4>${producto.nombre}</h4>
 </div>
 <div class="precioUnitario">
     <h5>$</h5>${producto.precio}
 </div>
 <div class="cantidades">
     <button id=btnMenos>-</button>
     <div id= btnNumero>${producto.cantidad}</div>
     <button id=btnMas>+</button>
 </div>
</div>`;
    });
}







