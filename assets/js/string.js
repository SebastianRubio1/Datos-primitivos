let doble= "asdasd12";
let simples = '123dsad#2';
let backits =`rye21092`;

let lista_invitados=`Invitados:
* María
* Juan
* Pedro
* Miguel
* Diana
`;
/*alert(lista_invitados);*/

// Caracteres Especiales \

/*
\n -> Nueva línea, salto en línea
\t -> Tabulación
\\ -> Backslash
\',\",\`-> Cada una de las comillas*/

console.log("Hola\nMundo");


console.log("123".length);
console.log("Mi\n".length);

let str=`Hola`;

console.log(str[0]);
console.log(str.charAt(0));
console.log(str[-2]);
console.log(str.at(-2));


//for... of
for(let char of "Hola"){
    console.log(char);
}

console.log(str.toUpperCase());
console.log(str.toLowerCase());


str= "hola";
console.log(str[0].toUpperCase(),str[1].toLowerCase(),str[2].toLowerCase(),str[3].toLowerCase());
 
//Buscar y hacer ejemplos que tengan mi nombre del metodo indexof, lastIndexof, includes, starstswith, endswith, slice, substrings, trin y repat

let nombre = "Joan Sebastian Rubio Saavedra";
// Indexof 
alert(`La posicion de la primera letra \"E\" es la posicion ${nombre.indexOf("e")+1} del nombre ${nombre}`);

// 1. Funcion que devuelva un string con el primer caracter en mayuscula del string ingresado por parametro
// 2. Escriba la funcion buscarSpam que devuelva verdadero si el string que se ingresa como parametro contiene la palabra viagara o xxx, en cualquier convinacion de minusculas o mayusculas
// 3. funcion que convierta moneda a número entero