//comentario,variables, constastes, tipos de datos y hola mundo
//comentario simple
/*
Comentario 
varias
lineas
*/
//variables
/*
Tipos de variables en JavaScript:
En JavaScript, hay tres formas de declarar variables:

var: Declara una variable con ámbito de función (no recomendado en código moderno).

let: Declara una variable con ámbito de bloque.

const: Declara una constante con ámbito de bloque (no se puede reasignar).
*/

//1.var
var names = "Antonio"; // Declaración con var
console.log(names); // Salida: Carlos

//2.let
let age = 30; // Declaración con let respeta el ámbito de bloque
console.log(age); // Salida: 30
//3.Const
const PI = 3.1416; // Declaración con const
console.log(PI); // Salida: 3.1416

// PI = 3.14; // Esto daría un error, no se puede reasignar una constante

const urlOficialJavaScript = "https://developer.mozilla.org/es/docs/Web/JavaScript"; // URL oficial de JavaScript
console.log(urlOficialJavaScript); // Salida: https://developer.mozilla.org/es/docs/Web/JavaScript



/*
En JavaScript, hay 7 tipos de datos primitivos. Estos son:

number: Representa números, ya sean enteros o de punto flotante.
Ejemplo: 42, 3.14.

string: Representa una secuencia de caracteres.
Ejemplo: "Hola", 'Mundo'.

boolean: Representa un valor lógico, que puede ser true o false.
Ejemplo: true, false.

undefined: Representa un valor no definido.
Ejemplo: let x; (el valor de x es undefined).

null: Representa la ausencia intencional de un valor.
Ejemplo: let y = null;.

bigint: Representa números enteros de tamaño arbitrario.
Ejemplo: 1234567890123456789012345678901234567890n.

symbol: Representa un valor único e inmutable, útil como identificador de propiedades de objetos.
Ejemplo: let sym = Symbol('descripción');.

Estos tipos son primitivos porque no son objetos y no tienen métodos
 (aunque en algunos casos, como string, JavaScript permite acceder a métodos como si fueran objetos mediante "autoboxing"). Además, 
 son inmutables, lo que significa que no pueden ser modificados después de su creación.
*/
//1.number
let edad = 25; // Número entero
let precio = 19.99; // Número de punto flotante
console.log(edad, precio); // Salida: 25 19.99
//2.Sting
let nombre = "Juan";
let saludo = 'Hola, ¿cómo estás?';
console.log(nombre, saludo); // Salida: Juan Hola, ¿cómo estás?
//3.Bolean
let esMayorDeEdad = true;
let tieneHijos = false;
console.log(esMayorDeEdad, tieneHijos); // Salida: true false
//4.undifined
let x; // Variable declarada pero no inicializada
console.log(x); // Salida: undefined
//.5 Null
let y = null; // Variable inicializada con valor nulo
console.log(y); // Salida: null
//6.bigint
let numeroGrande = 1234567890123456789012345678901234567890n; // Número grande con sufijo 'n'
console.log(numeroGrande); // Salida: 1234567890123456789012345678901234567890n
//7.symbol
let id = Symbol("id"); // Creación de un símbolo único
let usuario = {
  nombre: "Ana",
  [id]: 123 // Usando el símbolo como clave de propiedad
};
console.log(usuario[id]); // Salida: 123