// Funciones definidas por el usuario

// 1. Función simple: Una función que no recibe parámetros y no devuelve ningún valor.
function saludar() {
    console.log("¡Hola, JavaScript!");
}
saludar(); // Llama a la función para imprimir "¡Hola, JavaScript!"

// 2. Función con retorno: Una función que devuelve un valor.
function returnGreet() {
    return "¡Hola, JavaScript!";
}
console.log(returnGreet()); // Imprime el valor devuelto por la función.

// 3. Función con un argumento: Una función que recibe un parámetro.
function argGreet(nombre) {
    console.log(`Hola, ${nombre}!`);
}
argGreet("Antonio"); // Llama a la función con el argumento "Antonio".

// 4. Función con argumentos: Una función que recibe múltiples parámetros.
function argsGreet(saludo, nombre) {
    console.log(`${saludo}, ${nombre}!`);
}
argsGreet("Hola", "Antonio"); // Llama a la función con dos argumentos.

// 5. Función con un parámetro predeterminado: Una función con un valor predeterminado para un parámetro.
function defaultArgGreet(nombre = "JavaScript") {
    console.log(`Hola, ${nombre}!`);
}
defaultArgGreet("Antonio"); // Llama a la función con el argumento "Antonio".
defaultArgGreet(); // Llama a la función usando el valor predeterminado "JavaScript".

// 6. Función con argumentos y retorno: Una función que recibe parámetros y devuelve un valor.
function returnArgsGreet(saludo, nombre) {
    return `${saludo}, ${nombre}!`;
}
console.log(returnArgsGreet("Hola", "Antonio")); // Imprime el valor devuelto por la función.

// 7. Función con retorno de varios valores: Una función que devuelve múltiples valores usando un array.
function multipleReturnGreet() {
    return ["Hola", "JavaScript"];
}
const [saludar, nombre] = multipleReturnGreet(); // Desestructura el array devuelto.
console.log(saludar); // Imprime "Hola".
console.log(nombre); // Imprime "JavaScript".

// 8. Función con un número variable de argumentos: Una función que acepta cualquier cantidad de argumentos.
function variableArgGreet(...nombres) {
    nombres.forEach(nombre => {
        console.log(`Hola, ${nombre}!`);
    });
}
variableArgGreet("JavaScript", "Antonio", "heran76", "comunidad"); // Llama a la función con varios argumentos.

// 9. Función con un número variable de argumentos con palabra clave: Una función que acepta un objeto como argumento.
function variableKeyArgGreet(nombres) {
    for (const [clave, valor] of Object.entries(nombres)) {
        console.log(`${valor} (${clave})!`);
    }
}
variableKeyArgGreet({
    lenguaje: "JavaScript",
    nombre: "Antonio",
    alias: "heran76",
    edad: 48
}); // Llama a la función con un objeto como argumento.

// 10. Funciones dentro de funciones: Una función que contiene otra función.
function funcionExterna() {
    function funcionInterna() {
        console.log("Función interna: Hola, JavaScript!");
    }
    funcionInterna(); // Llama a la función interna.
}
funcionExterna(); // Llama a la función externa.

// 11. Funciones del lenguaje (integradas): Ejemplos de funciones integradas en JavaScript.
console.log("MoureDev".length); // Imprime la longitud de la cadena.
console.log(typeof 36); // Imprime el tipo de dato.
console.log("MoureDev".toUpperCase()); // Convierte la cadena a mayúsculas.

// 12. Variables locales y globales: Ejemplo de uso de variables locales y globales.
let globalVar = "JavaScript"; // Variable global.

function holaJavaScript() {
    let localVar = "Hola"; // Variable local.
    console.log(`${localVar}, ${globalVar}!`);
}
console.log(globalVar); // Imprime la variable global.
// console.log(localVar); // Esto daría un error, ya que localVar no es accesible fuera de la función.

holaJavaScript(); // Llama a la función para imprimir "Hola, JavaScript!".

// 13. Extra: Función que imprime números del 1 al 100, reemplazando múltiplos de 3, 5 o ambos con textos específicos.
function imprimirNumeros(texto1, texto2) {
    let conteo = 0;
    for (let numero = 1; numero <= 100; numero++) {
        if (numero % 3 === 0 && numero % 5 === 0) {
            console.log(texto1 + texto2); // Múltiplo de 3 y 5.
        } else if (numero % 3 === 0) {
            console.log(texto1); // Múltiplo de 3.
        } else if (numero % 5 === 0) {
            console.log(texto2); // Múltiplo de 5.
        } else {
            console.log(numero); // Ninguno de los anteriores.
            conteo++;
        }
    }
    return conteo; // Devuelve el conteo de números no reemplazados.
}
console.log(imprimirNumeros("Efervescencia", "Zumbido")); // Llama a la función con los textos personalizados.