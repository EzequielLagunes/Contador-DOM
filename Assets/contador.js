var valorContador = 0; //iniciamos nuestra variable en o

function incrementar(){
    valorContador++; // incrementar 1 en 1 
    document.getElementById("contador").innerHTML = valorContador;
}

function decrementar(){
    valorContador--; // decrementar 1 en 1  
    document.getElementById("contador").innerHTML = valorContador;
}
function resetear(){
    valorContador = 0; // decrementar 1 en 1  
    document.getElementById("contador").innerHTML = valorContador;

}