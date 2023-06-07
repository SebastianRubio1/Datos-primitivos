///////////////////////////////
// Arrays - Arreglos
//////////////////////////////

// Permiten tener información ordenada
// 0 .. n

let arreglo = new Array();
let arr =[];

let fruits = ["Papaya", "Piña", "Mango", "Fresa", "Mora", "Lulo"];
console.log(fruits[0]);
console.log(fruits[5]);
console.log(fruits[3]);

console.log(fruits);

fruits[0]="Coco";
console.log(fruits);
console.log(fruits[0]);

console.log(fruits.length);
console.log(fruits[fruits.length -1]);

console.log(fruits.flat(-1)); // Igual que la línea 26

// push, pop, shift ,  unshift

// push: Inserta un elemento al final del arreglo 
// pop: Obtiene el elemento al final del arreglo y lo elimina

fruits.push("Mangostino");
console.log(fruits);

console.log(fruits.pop());
console.log(fruits);

// shift : Extrtae el primer elemento del arreglo
// unshift : Agrega un elemnto al comienzo del arreglo

console.log(fruits.shift());
console.log(fruits);

fruits.unshift("Guanábana");
console.log(fruits);



// crear una funcion que agregue el nombre ingresado por parametro al arraglo names
//utilizar un prompt que use la funcion para agregar nombres
// escribir el codigo para insertar la cantidad de nombres que indique el usuario
// mostrar los nombres que hay en el arreglo
/*
let names = [];

let addName = (name) =>{
    names.push(name);
}

//let nombre=prompt("Ingrese su nombre");
//addName(nombre);

let numNames=parseInt(prompt("¿Cuantos nombres desea ingresar?"));

for (let i =0;i<numNames;i++){
    let nombre=prompt("Ingrese un nombre");
    addName(nombre);
}
for(let i=0;i<numNames;i++){
    console.log(names[i]);
}

// for ...  of 
for(let nombre of names){
    console.log(nombre);
}
*/
/*
console.log(fruits.length)
//truncando el arreglo
fruits.length=2
console.log(fruits.length)
console.log(fruits)

delete fruits[1];
console.log(fruits.length)
console.log(fruits[1])
console.log(fruits)
*/


// splice   

fruits.splice(1,1); //Desde el índice 1, elimine 1 elemento
console.log(fruits.length)
console.log(fruits)

arr=["Yo", "Estudio", "JavaScript", "en", "el", "SENA"];
console.log(arr);
arr.splice(1,2, "voy", "a", "bailar");  
console.log(arr);
let datos= arr.splice(1,3);
console.log(datos);

arr.splice(1,0, "Estudio", "JavaScript")
console.log(arr);

// Funcion slice haga un ejemplo donde utilize su nombre completo
let MyName=["Joan", "Sebastian", "Rubio", "Saavedra"];
let lastName=MyName.slice(-3,-2);
console.log(lastName);
console.log(MyName);



let nombre=["Juan", "Mateo"];
let apellido=["Morales", "Quintero"];
// concat une dos arreglos o más
let nombreCompleto=nombre.concat(apellido , "No", "existe", "en", "la", "vida real");
console.log(nombreCompleto); 

//for each(item,index,array)
/*
["Mateo", "Marcos", "Lucas", "Juan", "María", "Magdalena"].forEach((item,index,array)=>{
    console.info(`${item} tiene el índice ${index} en ${array}`);
});

["Mateo", "Marcos", "Lucas", "Juan", "María", "Magdalena"].forEach(alert);*/


/*indexof | lastIndexOf | includes =>¿Para que sirven? De un ejemplo para cada uno con arreglos que involucren su nombre */

let name1=["Sebastian", "Rubio"];
console.log(name1.indexOf("Sebastian"));
console.log(name1.indexOf("Rubio"));

let name2=["Sebastian", "Rubio"];
console.log(name2.lastIndexOf("Sebastian"));
console.log(name2.lastIndexOf("Rubio"));