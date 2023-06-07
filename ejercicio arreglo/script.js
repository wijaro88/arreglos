// alert("pru");

//EJERCICIO 1
// let arreglo=[null];
// console.log(arreglo);

// arreglo=[2,1,3,4,5,6,7,8,545,232];
// console.log(arreglo); 

//EJERCICIO 2
// let num = prompt("digite los elementos separados por coma");
// console.log(`los elementos dijitados son:  ${num}`);
// let coma = /\s*,\s*/;
// let listNum = num.split(coma);
// console.log(listNum);

//EJERCICIO 3

let array = [10, 40, 30, 20, 15, 5];
let max = array[0];
let min = array[0];


function comparar(a,b){
    return a-b;
}
 console.log(`ordenado`,array.sort(comparar) );


for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
        min = array[i];
    }
    if (max < array[1]) {
        max = array[i];
    }
}
//arreglo numero menor
console.log(`numero menor: ${min}`);
//numero mayor
console.log(`numero mayor: ${max}`);
