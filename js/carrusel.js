var actual = 0;
var Imagen = new Array(4);
Imagen[0] ="images/banner.png";
Imagen[1] ="images/banner2.jpg";
Imagen[2]="images/banner3.jpg";
Imagen[3] ="images/banner4.jpg";

function rotacion(){
    var objImagen;

    objImagen = document.getElementById("imagen");

    objImagen.src=Imagen[actual];
    actual ++;

    if(actual==Imagen.length)
        actual=0;

    setTimeout("rotacion()", 1500);
}

function cambiarImagen(pos) {
    var objImagen;

    objImagen = document.getElementById("imagen")

    objImagen.src = Imagen[pos];
    actual = pos;
}