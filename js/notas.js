var nombre = prompt("Cuál es tu nombre?"); /*\n es un salto de linea dentro del prompt*/
var peso = document.getElementById("pesousuario"); /*parseInt tambien me sirve para convertir el texto plano en texto no plano xd*/
var planeta = document.getElementById("planeta");
var boton = document.getElementById("botoncito");
function resultadoporclick()
{
  alert("no le des ahi!!!!!!!!")
}
boton.addEventListener ("click", resultadoporclick); //añadir un escuchador de eventos//
var g_t = 9.8;
var g_m = 3.7;
var g_j = 24.8;
var ruta = window.location; /*esto es una variable interna de window= atributo. cuando una funcion es parte de n objeto se le llama metodo*/
if (planeta == 1)
  {
    var p_m;
    p_m = peso * g_m / g_t; /*parseFloat para traer los decimales*/
    p_m = parseInt(p_m); /*parseInt convierte variables decimales en enteras*/
    document.write("<strong>Hola! genial " + nombre + " </strong>vamos a ver cual es tu peso en Marte. ")
    document.write("Tu peso en marte es <strong>" + p_m + " Kilos</strong>"); /*el strong no puede ir dentro del js, debe ir dentro de las ""*/
  }
  else if (planeta == 2) /*else es si no! y else if es si no obligatorio esto*/
  {
    var p_j;
    p_j = peso * g_j / g_t;
    p_j = parseInt(p_j); /*NaN Significa que hay un error xd, y js se volvio loco*/
    document.write("<strong>Hola! genial " + nombre + " </strong>vamos a ver cual es tu peso en Jupiter. ")
    document.write("Tu peso en Jupiter es <strong>" + p_j + " Kilos</strong>"); /*cuando las funciones son parte de un objeto se llaman METODOS*/
  }
  else
  {
  document.write("Tienes que escoger entre <strong>1</strong> y <strong>2</strong> o sino no funciona mi amigo :/")
  }











/*document.write("estás en " + ruta + "ahora mismo");
console.log(ruta + "Qué haces aqui mi amor?"); /*console.log me deja mensajes en la consola*/

/*diagramas de flujo y condicionales. == es si es igual = es igual !== no es igual*/
/*document.write("Bienvenido ") +n ("es un placer tenerte por aca"); Pendiente
document.write es una funcion que escribe strings dentro de html, es como body pero dentro de JavaScript
var x = 1;
var y = 2;
var z = x + y;
var resp = prompt("Quieres hacer una pequeña suma conmigo?");
var Ppregunta = "si";
var Ppreguntano = "no";
var decidete = "no se";
if (decidete === "no se")
  {
    prompt ("DECIDETE!!!")
  }
if (Ppreguntano === "no")
  {
  prompt ("Vale no hay problema >:3")
  }
if (Ppregunta === "si")
  {
  prompt ("Genial, este es mi problema suma, si X = 1 y Y = 2, Cuanto daria x + y?")
}
*/
/*objetos en programacion- navigator. window quieres cerrar esta pestaña?*/
