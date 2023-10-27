// question 2 : Create an object which describes some of your physical or mental attributes. Add another property to the object. Show the complete object again. Delete the least important attribute. Show the complete object again.

const myPhysicalAndMenralAttr = {
    'programming languages' : "C",
    'capacite Concentration' : "Capacité de concentration élevée",
    'resolution des Problemes' : "Capacité à résoudre des problèmes de manière logique et efficace",
    creativite: "Capacité à penser de manière innovante",
    'capacite d Apprentissage' : "Capacité à apprendre de nouvelles compétences et à s'adapter aux changements technologiques",
    collaboration: "Capacité à travailler efficacement en équipe",
    gestionStress: "Capacité à gérer le stress et à rester calme dans des situations difficiles"
};
console.log(myPhysicalAndMenralAttr);
// console.log(myPhysicalAndMenralAttr['resolution des Problemes']);
delete myPhysicalAndMenralAttr['gestionStress'];
delete myPhysicalAndMenralAttr.collaboration;
console.log(myPhysicalAndMenralAttr);
// question 3 : Create two objects shoe_1 and shoe_2 which characterize shoes. Use the literal notation. Create two other objects shirt_1 and shirt_2 which characterize shirts. First, create empty objects. Then, add attributes to the objects. Create an object warehouse and add all 4 objects to it. Show the price of the 4.-th product out of the warehouse object.

const warehouse = {
    shoe1 : {
        size : 42,
        color : "brown", 
        brand : "nike",
        price : 40
    },
    shoe2 : {
        
    },
    shirt1 : {
        size : 44,
        color : "black", 
        brand : "addidas",
        price : 45
    },
    shirt2 : {
        size : "M",
        color : "red", 
        brand : "dior",
        price : 15
    }
};

console.log(warehouse.shirt2.price);

// question 4 : The Cat : Write yourself a virtual cat - animals with a CLI are so much nicer than ones with fur. Create an object that represents a cat. It should have properties for tiredness, hunger, lonliness and happiness Next, write methods that increase and decrease those properties (there's an example in the slides). Call them something that actually represents what would increase or decrease these things, like "feed", "sleep", or "pet". Last, write a method that prints out the cat's status in each area. Bonus: Make the functions take arguments that increase or decrease arbitrary amounts Bonus: Make the functions as arbitrary as cats are - sometimes make it so the cat doesn't want to be petted.

// question 5 : The Recipe Card. Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). On separate lines (one console.log statement for each), log the recipe information so it looks like: Mole Serves: 2 Ingredients: cinnamon cumin cocoa

const recipeCard = {
    title : "les riz et les haricots",
    serving : 3,
    ingredients : ["huile", "epices","viande"]
}

console.log("à : " + recipeCard.title, " pour: " + recipeCard.serving + " ingredients : " + recipeCard.ingredients[0]);
console.log("à : " + recipeCard.title, " pour:  " + recipeCard.serving + " ingredients : " + recipeCard.ingredients[1]);
console.log("à : " + recipeCard.title, " pour:" + recipeCard.serving + " ingredients : " + recipeCard.ingredients[2]);

// question 6 : The Reading List. Keep track of which books you read and which books you want to read! Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

let readingList = [
    {title : "Royan l'enfance volée (2019)", author : "Florence Lina Mouissou", alreadyRead:false },
    {title : "Trahison et chantage", author : "Maxime N'Dbka" , alreadyRead:true },
    {title : "L'Homme qui tua le crocodile (1972)", author : "Sylvain Bemba", alreadyRead:false },
    {title :"Laveur des Cadavres (1992)" , author :"Zamenga Batukezanga" , alreadyRead:true }
]

readingList.forEach(parcour => {
    if (readingList.alreadyRead) {
        console.log('You still need to read "'+ parcour.title + '\"' + ' by ' + parcour.author);
    } else {
        console.log('You still need to read "'+ parcour.title + '\"' + ' by ' + parcour.author);  
    } 
});

// question 7 : 1. Create a javascript object that represents a food store product.
// The item should contain a name, description, bulk price, and consumer price.

// 2. Create another javascript object that contains a single method for printing the above object's name and description.

// 3. Create another method on the object from step 2 that returns a product's price with a discount applied.
// Supposing the product's price is 5, calling the discount method with a discount of 15% (0.15) will return 4.25.

const foodStoreProduct = {
    name : "la mangue",
    description : "fruit juteux",
    'bulk price' : 200,
    'consumer price' : 500
};

const descriptionObject = {
    printObject (){
        console.log(foodStoreProduct.name + " " + foodStoreProduct.description);
    },
    returnPrice(){
        return ((foodStoreProduct['bulk price']) - (foodStoreProduct['bulk price'] * 0.15));
    }
};

 const discount = descriptionObject.returnPrice();
console.log(discount);
descriptionObject.printObject();