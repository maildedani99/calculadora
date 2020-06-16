console.log("JS is running");


const display = document.getElementById('display');
//var uno = document.getElementById("uno");
//uno.addEventListener("click", botonUno);
//uno.addEventListener("mousedown", botonUnoDown);
let valor1;
let ClickNumero =  false;
let resultado = null;
let operador = null;
display.value = "0";
function push(id) {
    if(ClickNumero == false || valor1 == "0" ) {limpiarDisplay()}
    ClickNumero = true;
    click(id); //ejecuta el click visual del boton
    display.value += id;    // añade numero pulsado al display
    valor1 = (parseFloat(display.value));
}  
function calcular(id) {
    ClickNumero = false;
    click(id);
    display.value = valor1;
                                    console.log(valor1+"<br>"+ operador+"<br>"+ resultado);
    switch (operador) {
        case "+" :
            if(resultado == null){resultado = 0;}
            resultado = resultado + valor1;
        break;
        case "-" :
            if(resultado == null){resultado = 0;}
            resultado = resultado - valor1;
        break;
        case "*" :
            if(resultado == null){resultado = 1;}
            resultado = resultado * valor1;
        break;
        case "/" :
            if(resultado == null){resultado = 1;}
            resultado = resultado / valor1;
        case null :
            resultado = valor1;
        break;

    }
    if (id == "=") {
        display.value = resultado;
        operador = null;
        valor1 = null;
    } else {
        operador = id;
    }
}

function click(id){
let boton = document.getElementById(id); 
    boton.style.cssText = " transform: translate(3px,3px); box-shadow:none; transition: all 0.08s linear";
    setTimeout(function (){boton.style.cssText = " transform: translate(0,0);transition: transition: all 0.08s linear"},80); 
}

function limpiarDisplay(){
    display.value = " ";
}

