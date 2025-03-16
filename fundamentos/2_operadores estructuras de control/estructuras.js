/*
Resumen de los operadores:
Aritméticos: Para cálculos matemáticos.

Asignación: Para asignar valores a variables.

Comparación: Para comparar valores.

Lógicos: Para combinar condiciones.

Incremento/Decremento: Para aumentar o disminuir valores.

Concatenación: Para unir strings.

Ternarios: Para condiciones en una sola línea.

Tipo: Para verificar el tipo de dato.

Pertenencia: Para verificar si una propiedad existe en un objeto.

Desestructuración: Para extraer valores de arreglos u objetos.

Propagación: Para copiar o expandir elementos.

Coalescencia Nula y Opcional: Para manejar valores null/undefined de forma segura.

Bit a Bit: Para operaciones a nivel de bits.
*/

// 1. Operadores Aritméticos (+, -, *, /, %, **)
let a = 10;
let b = 3;
console.log(a + b); // Suma: 13
console.log(a - b); // Resta: 7
console.log(a * b); // Multiplicación: 30
console.log(a / b); // División: 3.333...
console.log(a % b); // Módulo (resto): 1
console.log(a ** b); // Potencia: 1000

// 2. Operadores de Asignación (=, +=, -=, *=, /=, %=, **=)
let x = 5;
x += 2; // Equivalente a x = x + 2
console.log(x); // 7

// 3. Operadores de Comparación (==, ===, !=, !==, >, <, >=, <=)
console.log(5 == "5"); // true (solo valor)
console.log(5 === "5"); // false (valor y tipo)
console.log(5 != "5"); // false (solo valor)
console.log(5 !== "5"); // true (valor y tipo)
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 4); // false

// 4. Operadores Lógicos (&&, ||, !)
let esMayor = true;
let tienePermiso = false;
console.log(esMayor && tienePermiso); // AND: false
console.log(esMayor || tienePermiso); // OR: true
console.log(!esMayor); // NOT: false

// 5. Operadores de Incremento/Decremento (++, --)
let contador = 0;
contador++; // Incremento: contador = 1
contador--; // Decremento: contador = 0
console.log(contador); // 0

// 6. Operadores de Concatenación (+)
let nombre = "Juan";
let apellido = "Pérez";
console.log(nombre + " " + apellido); // "Juan Pérez"

// 7. Operadores Ternarios (condición ? valor1 : valor2)
let edad = 18;
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje); // "Mayor de edad"

// 8. Operadores de Tipo (typeof, instanceof)
console.log(typeof 42); // "number"
console.log(typeof "Hola"); // "string"
console.log([] instanceof Array); // true (verifica si es una instancia de Array)

// 9. Operadores de Pertenencia (in)
let persona = { nombre: "Ana", edad: 25 };
console.log("nombre" in persona); // true (verifica si existe la propiedad)

// 10. Operadores de Desestructuración
let [primero, segundo] = [1, 2]; // Desestructuración de arreglos
console.log(primero, segundo); // 1 2

let { nombre: n, edad: e } = persona; // Desestructuración de objetos
console.log(n, e); // "Ana" 25

// 11. Operadores de Propagación (...)
let numeros = [1, 2, 3];
let nuevosNumeros = [...numeros, 4, 5]; // Copia y expande el arreglo
console.log(nuevosNumeros); // [1, 2, 3, 4, 5]

// 12. Operadores de Coalescencia Nula (??) y Opcional (?.)
let valorNulo = null;
let valorPorDefecto = valorNulo ?? "Valor por defecto"; // Asigna valor si es null/undefined
console.log(valorPorDefecto); // "Valor por defecto"

let usuario = { nombre: "Carlos" };
console.log(usuario.edad?.toString()); // undefined (no lanza error si la propiedad no existe)

// 13. Operadores Bit a Bit (&, |, ^, ~, <<, >>, >>>)
let num1 = 5; // 0101 en binario
let num2 = 3; // 0011 en binario
console.log(num1 & num2); // AND: 1 (0001)
console.log(num1 | num2); // OR: 7 (0111)
console.log(num1 ^ num2); // XOR: 6 (0110)
console.log(~num1); // NOT: -6 (complemento a dos)
console.log(num1 << 1); // Desplazamiento a la izquierda: 10 (1010)
console.log(num1 >> 1); // Desplazamiento a la derecha: 2 (0010)
console.log(num1 >>> 1); // Desplazamiento a la derecha sin signo: 2 (0010)