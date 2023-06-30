/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

// let a = 1
// let b = 100;

// for(a; a<=b; a++){
//     console.log(a);
//     if(a % 3 == 0 && a % 5 == 0){
//         console.log("fizzbuzz");
//     }else if(a % 3 == 0){
//         console.log("fizz");
//     }else if(a % 5 == 0){
//         console.log("buzz");
//     }
// }

/**
 * Escribe una funcion que reciba dos palabras(String) y retorne
 * verdadero o falso(Bool) según sean o no anagramas.
 * - Un Anagrama en formar una palabra reordenando TODAS
 *   las letras de otra palabra incial.
 * - NO hace falta comprobar que ambas palabras existen.
 * - Dos palabras exactamente iguales no son anagramas.
 */


// function esAnagrama(pa, po){

//     if(pa.toLowerCase() === po.toLowerCase()){
//         return false;
//     }
//     return pa.toLowerCase().split("").sort().join("") === po.toLowerCase().split("").sort().join("");
// }

// console.log(esAnagrama("amor", "roma"));

/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

// let a = 0;
// let b = 1;


// for (let x = 0; x<=50; x++){
//     console.log(x + ") " + a);
//     let c = a + b;
//     a = b;
//     b = c;
// }

/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

// let count = 0;
// for(let i = 1; i < 100; i++){
// 	for(let j = 1; j <= i; j++){
// 		if(i % j == 0){
// 			count++;
// 		}
// 	}
// 	if(count == 2){
// 		document.write(i + " ");
// 	}
// 	count = 0;
// }

/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

// function area(){
//     let Cuadrado = new areaCuadrado(4);
//     Cuadrado.area();
//     let Triangulo = new areaTriangulo(10, 5);
//     Triangulo.area();
//     let Rectangulo = new areaRectangulo(5, 7);
//     Rectangulo.area();
// }

// class areaCuadrado{
//     constructor(lado){
//         this.lado = lado;
//     }
//     area(){
//         let resultado = this.lado * this.lado;
//         document.write("Cuadrado: " + (resultado) + "<br/>");
//     }
// }

// class areaTriangulo{
//     constructor(base, altura){
//         this.base = base;
//         this.altura = altura;
//     }
//     area(){
//         let resultado = (this.base * this.altura) / 2;
//         document.write("Triangulo: " + resultado + "<br/>");
//     }
// }

// class areaRectangulo{
//     constructor(base, altura){
//         this.base = base;
//         this.altura = altura;
//     }
//     area(){
//        let resultado = (this.base * this.altura);
//        document.write("Rectangulo: " + resultado + "<br/>");
//     }
// }

// area();


/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo: https://raw.githubusercontent.com/mouredev/
 *   mouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */


