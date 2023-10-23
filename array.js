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

// question 3 : Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
function lastElementArray(table){
    const firstElement = table.pop();
    console.log(firstElement);
}
function nLastElementArray(table, n){
    const nElement = table.slice(-n);
    console.log(nElement);
}

lastElementArray(eleve);
nLastElementArray(eleve,2);

// question 4 : Write a simple JavaScript program to join all elements of the following array into a string.
function joinAllElement(table){
    const myTable = table.join();
    console.log(myTable);
}

const arraymyColor = ["Red", "Green", "White", "Black"];
joinAllElement(arraymyColor);

// question 5 : Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
function insertDashes(number){
    const table = Array.from(String(number), Number);
    let arrayDashes = [];
    for (let i = 0; i < table.length; i++) {
        (table[i-1] % 2 === 0) && (table[i] % 2 === 0) ? arrayDashes.push('-',table[i].toString()): arrayDashes.push(table[i].toString());
        
    }
    console.log(table);
    console.log(arrayDashes.join(''))
}
insertDashes(254680);

// question 6 : Write a JavaScript program to compute the sum and product of an array of integers.
function sumAndProductArray(table){
    const mytable = table;
    let sum = 0
    let product = 1;
    for (let i = 0; i < mytable.length; i++){
        sum += mytable[i];
        product *= mytable[i];
    }
    console.log("la somme du tableau vaut:" + sum);
    console.log("le produit du tableau vaut:" + product);
}
const ourTable = [2,5,4,6,8,0];
sumAndProductArray(ourTable);