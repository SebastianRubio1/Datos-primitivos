let mil_millones = 1000000000;

let milMillones = 1_000_000_000;

console.info(mil_millones);
console.info(milMillones);

console.info(milMillones == mil_millones);
console.info(milMillones === mil_millones);

console.info(typeof(milMillones));

let milMill = 1e9; //Notacion cienticia
console.log(milMill);

// 120/10 = 12/10= 1.2 /10 = 0.120
// 0.12

console.info(120e-5);
// 0.000012

console.log(0xF); // Hexadecimal: 0 1 2 3 4 5 6 7 8 9 A B C D E F
console.log(0xfff);

//             210

console.log(0b111);
console.log(0b111111111);
console.log(0b111111111111);
console.log(0b111111111111111);

let num=255;
console.log(num.toString()); // Convirtiendo a una cadena de caracteres
console.log(num.toString(16));
console.log(num.toString(2));
console.log(123456..toString(36));

//Redondeo Math

console.log(Math.ceil(2.4) + "-" + Math.round(2.4) + "-" + Math.floor(2.4))

console.log(Math.trunc(2.21)); // solo toma la parte entera

console.log(num.toFixed(1));// Redondea la cantidad de decimales que iondique el parámetro
console.log(num.toFixed(5));
num=12.36;
console.log(num.toFixed(1));

// calculos imprecisos

console.log(1e500);

console.log(0.1 + 0.2 == 0.3);
console.log(0.1 + 0.2);

let sum = 0.1 + 0.2;
console.log(sum.toFixed(1)==0.3)

console.log(9999999999999999);


console.log(parseInt("0xff",16));

console.log(Math.max(3,5,-10,1,8,3));
console.log(Math.min(3,5,-10,1,8,3));
console.log(Math.pow(2,6    ))
