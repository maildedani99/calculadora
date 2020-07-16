console.log("JS is running");

const display = document.getElementById('display');    //  establece la constante display como el elento input del DOM

let valor1;                 //  sera el valor que se acumula con los clicks
let ClickNumero =  false;  // controlara si el ultimo boton clicado es numerico
let resultado = null;   // el resultado acumulado en display
let operador = null;    //  registra el signo clicado para la proxima accion
display.value = "0";    //inicia a cero el valor de display
function push(id) {    // funcion inserta valores clicados en display
    if(ClickNumero == false || valor1 == "0" ) {limpiarDisplay()}  // evita secuencias de signos en el display
    ClickNumero = true;  // controla si el ultimo boton pulsado fue un numero
    click(id); //ejecuta el click visual del boton
    console.log(id);
    display.value += id;    // añade numero pulsado al display
    valor1 = (parseFloat(display.value));  // pasa el valor del display a un numero real
}  
function calcular(id) {      // funcion que ejecutara toso el proceso del calculo
    
    ClickNumero = false;     
    click(id);
    display.value = valor1;   
    
    switch (operador) {      //  switch para cada operacion diferente 
        case "+" :    // caso suma
            if(resultado == null){resultado = 0;}
            resultado = resultado + valor1;
        break;
        case "-" :   //  caso resta
            if(resultado == null){resultado = 0;}
            resultado = resultado - valor1;
        break;
        case "*" :    // caso multiplicacion
            if(resultado == null){resultado = 1;}
            resultado = resultado * valor1;
        break;
        case "/" :     // caso division
            if(resultado == null){resultado = 1;}
            resultado = (resultado / valor1);
        break;
        
        case null :    //  caso que no haya valor
            resultado = valor1;
        break;

    }
    if (id == "=" || id == "Enter") {      //  tratamiento para el operador igual o tecla enter
        if (Number.isInteger(resultado) == false){     // estye condicional controla que el resultado no tenga mas de dos decimales
            resultado = (resultado.toFixed(2));
        }
        display.value = resultado;  // muestra resultado en display
        operador = null;    // reinicia el operador a null
        valor1 = null;  // reinicia el valor inicial del display a null
    } else {
        operador = id;
    }
}

function click(id){     //  funcion efecto visual al pulsar un boton
    if ( id == "Enter"){
        id = "=";
    }
    
    let boton = document.getElementById(id); 
    boton.style.cssText = " transform: translate(3px,3px); box-shadow:none; transition: all 0.08s linear";
    setTimeout(function (){boton.style.cssText = " transform: translate(0,0);transition: transition: all 0.08s linear"},80); 
}

function limpiarDisplay(){    //  funcion para limpiar display
    display.value = " ";
}
document.addEventListener('keydown', (e) => {   // identifica las entradas por teclado fisico
    let key = e.key;       
    keyboard(key);

});

function keyboard(key){   //  funcion que lanzada el valor pasado por teclado fisico a las unciones anteriores
    
    if( key <= 9  || key == "."){
        push(key);
    }else{
        if ( key=="+" || key=="-" || key=="*"  || key=="/" || key == "Enter" ){
            calcular(key);
        }else {
            return;
        }
    
    }
}
