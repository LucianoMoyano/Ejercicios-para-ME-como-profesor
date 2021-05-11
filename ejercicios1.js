/* Pares e Impares
Deben crear una función llamada paresEimpares que reciba 3 parámetros. 

Los dos primeros números y el tercero una palabra (string).

La función tiene que mostrar en la consola los números entre el cero y el primer parámetro que recibe pero debe en primer lugar mostrar todos los números pares y luego los impares.

Además, cuando el número sea divisible por el segundo parámetro pasado a la función, en vez de loggearlo, debe imprimir la palabra que recibe como tercer parámetro. 

Ejemplo: 

paresEImpares(10,7,’prueba’)

====> 

0
2
4
6
8
10
1
3
5
’Prueba’
9
 */

function paresEimpares(numeroA, numeroB, palabra) {
  //recorrer los numeros del 1 hasta numeroA

  for (let i = 1; i <= numeroA; i++) {
    //recorrer elementos pares

    if (i % 2 === 0) {
      // evaluar si el elemento es divisible por numeroB
      /*  if(i % numeroB === 0){
            console.log(palabra);
        } else {
            console.log(i)
        } */

      /* if ternario : refactorizar
            (condicion) ? if : else        
        */

      i % numeroB === 0 ? console.log(palabra) : console.log(i);
    }
  }

  console.log("-------------------------------");

  for (let i = 1; i <= numeroA; i++) {
    //recorrer elementos impares

    if (i % 2 !== 0) {
      /*  if(i % numeroB === 0){
            console.log(palabra)
        } else {
            console.log(i)
        } */

      i % numeroB === 0 ? console.log(palabra) : console.log(i);
    }
  }
}

paresEimpares(10, 7, "prueba");

/* Index o Value?

Crea una función llamada "min" que tome dos parámetros. 

Un arreglo de números desordenados y un string que va a valer "index" o "value".

 Si el string es "value", la función deberá devolver el número más chico del array.
 Si el string es "index", la función deberá devolver el índice (la posición) del número más chico en el array.

	Ejemplo:

- min([5,8,2,3,4,9,1,18], “index”) debe retornar 6 (porque es el índice del 1 que es el menor)
- min([5,8,2,3,4,9,1,18], “value”) debe retornar 1 (porque 1 es el menor número)
 */

/* function min(array, palabra) {
  // logica comun para ambos casos
  // metodo slice: nos hace una copia del arreglo anterior
  // metodo sort: ordenar arreglos (function (a,b){return a-b})
  // metodo indexOf: nos devuelve el indice de un elemento

  let arregloOrdenado = array.slice().sort(function (a, b) {
    return a - b;
  });

  let numeroMenor = arregloOrdenado[0];

  if (palabra === "value") {
    // Value : encontrar el menor numero

    return numeroMenor;
  } else {
    // index : posicion del menor numero

    let indiceMenor = array.indexOf(numeroMenor);
    return indiceMenor;
  }
} */

function min(array, string) {
  let minimo = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minimo) {
      minimo = array[i];
    }
  }

  if (string == "value") {
    return minimo;
  }

  if (string == "index") {
    return array.indexOf(minimo);
  }
}

min([5, 8, 2, 3, 4, 9, 1, 18], "index");

/* Nuevo Arreglo

Debés crear una función llamada `nuevoArreglo`
que reciba un número como parámetro
y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.

Ejemplo: 

nuevoArreglo(5) debe retornar [1,2,3,4,5]
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]
 */

/* function nuevoArreglo(number) {
  let newArray = [];

  for (let i = 0; i < number; i++) {
    newArray[i] = i + 1;
  }
  return newArray;
} */

// push: agregarme o pushiarme los numeros que estan en mi indice a la variable que yo le estoy indicando

/* function nuevoArreglo(number) {
  let newArray = [];

  for (let i = 0; i <= number - 1; i++) {
    newArray.push(i + 1);
  }

  return newArray;
} */

function nuevoArreglo(number) {
  let newArray = [];

  for (let i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}

nuevoArreglo(10);

/* Similar String
Debés crear una función llamada `split`
 que reciba un `string` 
 y simule el comportamiento de la función original, Si no sabés cómo funciona, Google puede ayudarte..

Importante: No podés usar el String.split()

Ejemplo: 
split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
split(“chau”) debe retornar [“c”,”h”,”a”,”u”] */

/* function split(palabra) {
  let array = [];

  for (let i = 0; i < palabra.length; i++) {
    array[i] = palabra[i];
  }

  return array;
} */

function split(str) {
  // Ejercicio con metodo .push()

  let arr = [];

  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  return arr;
}

split("plataforma");
