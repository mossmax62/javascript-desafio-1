precio = 400000;
valorTotalAux=0;
cantidadAux=0;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

cantidadAux = document.querySelector(".cantidad").innerHTML;
valorTotal = document.querySelector(".valor-total");
cantidad = document.querySelector(".cantidad");

function sumar(){
    cantidadAux++;
    cantidad.innerHTML=cantidadAux;
    valorTotalAux=precio*cantidadAux;
    valorTotal.innerHTML=Number(valorTotalAux);
}

function restar(){
    cantidadAux--;
    cantidad.innerHTML=cantidadAux;
    valorTotalAux=precio*cantidadAux;
    valorTotal.innerHTML=Number(valorTotalAux);
}
