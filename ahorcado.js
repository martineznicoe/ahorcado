/* Array de Palabras */
var listaPalabras = [['MICROKERNEL'], ['ARCHIVO'], ['CRIPTOGRAFIA'], ['MALWARE'], ['KEYLOGGER'], ['SHELL'], ['SEGMENTACION'], ['JAVASCRIPT']];
            
/* Variable Palabra Aleatoria */
var palabra;

/* Array de Pistas de Palabras */
var listaPistas = [['Tipo de núcleo de un sistema operativo que provee un conjunto de primitivas o llamadas al sistema mínimas, para implementar servicios básicos como espacios de direcciones, comunicación entre procesos y planificación básica.'], ['Unidades lógicas de información creada por los procesos.'], ['Técnica que mediante cifras o códigos se transforma un mensaje para hacerlo incomprensible.'], ['Todo tipo de programa o código informático malicioso cuya función es dañar un sistema o causar un mal funcionamiento.'], ['Aplicaciones encargadas de almacenar en un archivo todo lo que el usuario ingrese por el teclado. Son ingresados por muchos troyanos para robar contraseñas e información de los equipos en los que están instalados.'], ['Interfaz de usuario sea grafica o de texto de un sistema operativo.'], ['Esquema de manejo de memoria, donde divide la memoria en segmentos, cada uno de los cuales tiene una longitud variable, que está definida intrínsecamente por el tamaño de ese segmento del programa.'], ['Lenguaje de programación interpretado por la mayoría de los navegadores, que les proporciona a las páginas web, efectos y funciones complementarias a las consideradas como estándar HTML.']];

/* Variable Pista de Palabra */
var pistaPalabra = "";

/* Variable cantidad de letras de "palabra" */
var numLetras = "";

/* Array de "_" donde se devela la incognita */
var incognita = [];
            
/* Variable cantidad de intentos */
var intentos = 6;

/* Variable para realizar aleotrio de Palabra Aleatoria */
var momentoActual = new Date();

/* Array para cambiar estilos en forma masiva */
var abc = [['A'],['B'],['C'],['D'],['E'],['F'],['G'],['H'],['I'],['J'],['K'],['L'],['M'],['N'],['Ñ'],['O'],['P'],['Q'],['R'],['S'],['T'],['U'],['V'],['W'],['X'],['Y'],['Z']];

/* Variable donde guarda Array de _ mientras se va completando la palabra */
var palabraOk = ""

/* FUNCION-Eleccion aleatoria de palabra */
function nuevaPartida(){
    for (i=0; i < listaPalabras.length;i++){
        var aleatorio = momentoActual.getSeconds() % listaPalabras.length;
        palabra = listaPalabras[aleatorio];
        palabra = palabra.toString()
        pistaPalabra = listaPistas[aleatorio];
    }

    /* Contar las letras de "palabra" y crear un array con "_" */
    var numLetras = palabra.length;
    for (i=0; i < numLetras;i++){
        incognita[i] = "_";
    }

    document.getElementById('imagen').src = "ima/" + intentos + ".jpg";
    document.getElementById('palabra').innerHTML = incognita.join(" ");
    document.getElementById('pistaPalabra').innerHTML = "PISTA: " + pistaPalabra;
    
} 

/* FUNCION-Verificar que la letra seleccionada está o no en alguna posición de palabra
en el caso que esté modifica el mismo múmero de posición del Array "incognita"
de lo contrario se deshabilita el botón de esa letra seleccionada y disminuye 1 la variable "intentos" */

function verificar(id){
    letraSeleccionada = id;
    numLetras = palabra.length;
        var bandera = 0;
        for (i = 0; i < numLetras; i++) {
            if (palabra.charAt(i) == letraSeleccionada) {
                incognita[i] = letraSeleccionada;
                bandera = 1;
            }
        }

        if (bandera == 0) {
            --intentos;
        }
        document.getElementById('imagen').src = "ima/" + intentos + ".jpg";
        document.getElementById('palabra').innerHTML = incognita.join(" ");
        document.getElementById(id).className = "abc_disabled";
        document.getElementById(id).onclick = "";
        
        palabraOk = incognita.join("");
        if (palabraOk == palabra){
            document.getElementById('imagen').src = "ima/win.jpg";
            var bCambio = "";
            for (i = 0; i <= abc.length; i++) {
                bCambio = abc[i];
                document.getElementById(bCambio).className = "abc_disabled";
                document.getElementById(bCambio).onclick = "";
            }
        }

        if (intentos == 0){
            document.getElementById('imagen').src = "ima/" + intentos + ".jpg";
            document.getElementById('palabra').innerHTML = palabra;
            var bCambio = "";
            for (i = 0; i <= abc.length; i++) {
                bCambio = abc[i];
                document.getElementById(bCambio).className = "abc_disabled";
                document.getElementById(bCambio).onclick = "";
            }
        }
}