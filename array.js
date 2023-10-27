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

// question 7 : Write a JavaScript program to sort the items of an array.
function sortArray(table){
    const myTable = table;

    let contientNumerique = false;
    let contientChaine = false;
  
    for (let i = 0; i < myTable.length; i++) {
      if (typeof myTable[i] === 'number') {
        contientNumerique = true;
      } else if (typeof myTable[i] === 'string') {
        contientChaine = true;
      }
  
      // Si les deux types sont déjà détectés, on peut sortir de la boucle
      if (contientNumerique && contientChaine) {
        break;
      }
    }
  
    if (contientNumerique && contientChaine) {
      console.log("Le tableau contient à la fois des éléments numériques et des chaînes.");
    }
    else if (contientNumerique) {
        myTable.sort((a,b) => a-b);
    }
    else if (contientChaine) {
        myTable.sort((a,b) => a.localeCompare(b));
    }
    else {
      console.log("Le tableau est vide ou ne contient aucun élément.");
    }
    
    console.log(myTable);
}
const tbl1 =[89,9,5,34,2,8,1,21];
const tbl2 =["omba","pembe","ekete","oshisha"];
sortArray(tbl1);
sortArray(tbl2);



// // question 8 : Write a JavaScript program to find the most frequent item in an array
// function frequentItemArray(){
//   // Créer un objet pour compter les occurrences de chaque élément
//   const occurrences = {};

//   // Parcourir le tableau et compter les occurrences de chaque élément
//   for (let i = 0; i < tableau.length; i++) {
//     const element = tableau[i];
//     occurrences[element] = occurrences[element] ? occurrences[element] + 1 : 1;
//   }

//   // Trouver l'élément le plus fréquent
//   let elementPlusFrequent;
//   let frequenceMax = 0;

//   for (const element in occurrences) {
//     if (occurrences[element] > frequenceMax) {
//       elementPlusFrequent = element;
//       frequenceMax = occurrences[element];
//     }
//   }

//   return elementPlusFrequent;
// }
// const monTableau = [1, 2, 3, 2, 4, 2, 5, 3, 2];
// const elementPlusFrequent = trouverElementPlusFrequent(monTableau);

// console.log("L'élément le plus fréquent dans le tableau est : " + elementPlusFrequent);

// question 9 : Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
function swapCasecaractere(text){
  let tableCaractere = text.split('');
  for (let i = 0; i < tableCaractere.length; i++) {
    tableCaractere[i] === tableCaractere[i].toUpperCase() ? tableCaractere[i] = tableCaractere[i].toLowerCase() : tableCaractere[i] = tableCaractere[i].toUpperCase();

  }
  const swapCase = tableCaractere.join('');
  console.log(swapCase);

}
const mySentence = "Je suis un apprenant de KADEA ACADEMIE !";
swapCasecaractere(mySentence);