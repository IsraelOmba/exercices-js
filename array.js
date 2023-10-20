// question 1 : Write a JavaScript function to check whether an `input` is an array or not.
 function checkArray(table){
    const test = Array.isArray(table);
    test ? console.log("votre entrée est un tableau") : console.log("votre entrée n'est pas un tableau");
 }
const eleve = ["omba", "mubake", "pezo", "marhegani"];
const age = 2
checkArray(age);

// question 2 : Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
function firstElementArray(table){
    const firstElement = table[0];
    console.log(firstElement);
}
function nElementArray(table, n){
    const nElement = table.slice(0,n);
    console.log(nElement);
}

firstElementArray(eleve);
nElementArray(eleve,3);

// question 3 :