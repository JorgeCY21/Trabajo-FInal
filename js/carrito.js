var carrito = [];

var tabla = document.getElementById('miTabla');
window.onload = () =>{
    //Al cargar la pagina que se rellene carrito con los elementos del localStorage
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    mostrarDatos();
    tabla.addEventListener('click',eliminarArticulo)
}
function mostrarDatos() {  
    limpiar();

    carrito.forEach(articulo => {
    var row = document.createElement('tr');
    row.innerHTML = `
        <td> ${articulo.titulo} </td>
        <td> ${articulo.cantidad} </td>
        <td> $${articulo.precio} </td>
        <td> <a href="#"  data-id="${articulo.id}" class="btn-borrar">  X </a></td>
    `;
    tabla.appendChild(row);
    });
}

function eliminarArticulo(e) {
    if (e.target.classList.contains('btn-borrar')) {
        e.preventDefault();
        const articuloId = e.target.getAttribute('data-id');
        //Elimina del arreglo por el data id
        carrito = carrito.filter(articulo => articulo.id !== articuloId)
       
        mostrarDatos();

        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
}
function limpiar() {
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild)
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
}