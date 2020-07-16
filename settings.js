

let link = document.getElementById('theme--css');
let buttonDark = document.getElementById('btn-dark');
let buttonLight = document.getElementById('btn-light');
let buttonw95 = document.getElementById('btn-w95');
let buttonSchool = document.getElementById('btn-school');
let buttonIos = document.getElementById('btn-ios');
buttonDark.disabled = true;


function ligthTheme() {     // para cambiar a colores claros
    click("btn-light");     // reutiliza la funcion click de settings.js para efecto visual del click

       setTimeout (function () {
           link.href  = "light.css";  // cambia el valor href del link de css
           buttonSchool.disabled = false;
           buttonLight.disabled = true; // desactiva el light theme
           buttonDark.disabled = false; //activa el dark theme
           buttonw95.disabled = false;  //desactiva el w95 theme
           buttonIos.disabled = false;
             
        },200);     // se aplica un retraso de ejecucion por un tema puramente estetico de efecto al pulsar boton
    }


function darkTheme() {  // funcion exacta a la anterior pero cambia a colores oscuros
    click("btn-dark");

    setTimeout  (function () {
            link.href = "dark.css";
            buttonSchool.disabled = false;
            buttonDark.disabled = true;    // desactiva boton dark theme
            buttonLight.disabled = false;   //  activa boton light theme
            buttonw95.disabled = false;  //desactiva el w95 theme
            buttonIos.disabled = false;
    },200);
    }

    function w95Theme() {  // funcion exacta a la anterior pero cambia a colores oscuros
        click("btn-w95");
    
        setTimeout  (function () {
                link.href = "w95.css";
                buttonSchool.disabled = false;
                buttonw95.disabled = true;  // activa el w95 theme
                buttonDark.disabled = false;    // desactiva boton dark theme
                buttonLight.disabled = false;   //  activa boton light theme
                buttonIos.disabled = false;
        },200);
        }

        
        function schoolTheme() {  // funcion exacta a la anterior pero cambia a colores oscuros
            click("btn-school");
        
            setTimeout  (function () {
                    link.href = "school.css";
                    buttonSchool.disabled = true;
                    buttonw95.disabled = false;  // activa el w95 theme
                    buttonDark.disabled = false;    // desactiva boton dark theme
                    buttonLight.disabled = false;   //  activa boton light theme
                    buttonIos.disabled = false;
            },200);
            }

        function iosTheme() {  // funcion exacta a la anterior pero cambia a colores oscuros
            click("btn-ios");
        
            setTimeout  (function () {
                    link.href = "ios.css";
                    buttonIos.disabled = true;
                    buttonSchool.disabled = false;
                    buttonw95.disabled = false;  // activa el w95 theme
                    buttonDark.disabled = false;    // desactiva boton dark theme
                    buttonLight.disabled = false;   //  activa boton light theme
            },200);
            }