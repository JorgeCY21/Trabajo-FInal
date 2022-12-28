
var articulos = document.getElementById('listaArticulos');
var carrito = [];


window.onload = () =>{
    //Al cargar la pagina que se rellene carrito con los elementos del localStorage
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
}

articulos.addEventListener('click', agregarArticulo);

function agregarArticulo(e) {
    e.preventDefault()
    if (e.target.classList.contains('añadirCarro')) {
        var producto = e.target.parentElement;// regresamos 1 padre para extraer los datos luego

        //creamos un objeto con la información del producto
        var info = {
            titulo: producto.querySelectorAll('span')[0].textContent,
            precio: parseFloat(producto.querySelectorAll('span')[1].textContent),
            id: producto.querySelector('button').getAttribute('data-id'),
            cantidad: 1
        }

        //Comprobamos si ya existe el producto
        var existe = carrito.some(x => x.id === info.id);
        if (existe) {
            //Actualizamos la cantidad
            var articulos = carrito.map(articulo => {
                if (articulo.id === info.id) {
                    articulo.cantidad++;
                    articulo.precio += info.precio;
                    return articulo; //retorna el objeto actualizado
                } else {
                    return articulo; //retorna los objetos que no son duplicados
                }
            });
            carrito = [...articulos];
        } else {
            carrito = [...carrito, info];
        }
        alert("Agregado al carrito")
    }


    localStorage.setItem('carrito', JSON.stringify(carrito));
}
