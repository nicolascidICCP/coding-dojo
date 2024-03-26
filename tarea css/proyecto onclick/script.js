document.getElementById("boton-inicio").addEventListener("click", function(){
    cambiarElColor();
})

function cambiarElColor(){
   let color = "red";
   let text = "Cerrar sesión"

   document.getElementById("boton-inicio").innerText = text;
   document.getElementById("boton-inicio").style.backgroundColor = color;
}

document.getElementById("borrar-boton").addEventListener("click", function(){
    this.remove();
})

document.getElementById("boton-gato").addEventListener("click", function(){
    likeGato();
})

let contador = 22;

function likeGato() {
    contador ++;

    document.getElementById("boton-gato").innerText = contador + " " + "Me gusta";
    alert("Gato atigrado was liked");
}

document.getElementById("boton-golden").addEventListener("click", function(){
    likeGolden();
})

let count = 45;

function likeGolden() {
    count ++;

    document.getElementById("boton-golden").innerText = count + " " + "Me gusta";
    alert("Golden Retriever was liked");
}
