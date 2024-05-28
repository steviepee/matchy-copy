/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable called animal and assign it to an empty object
var animal = {};
//use dot notaton to give it key species and value feline
animal.species = 'feline';
//use bracket notation to give it key name with a name
animal['name'] = 'Thurbjorn';
//give it key noises and assign it to an empty array
animal.noises = [];
//log object animal into the console
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create variable noises as an empty array
var noises = [];
//use bracket note to give a string of a sound
noises[0] = 'meow';
//use a method to add the second noise
noises.push('purr');
//use a method to add a sound to the front of the array
 noises.unshift('roar');
 //use bracket note to add another sound to the end
 noises[noises.length] = 'hiss';
 //log the length of noises
 console.log(noises.length);
 //log the last element
 console.log(noises[noises.length - 1]);
 //log the array
 console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//use bracket notation to give prop noises the value of array noises
animal['noises'] = noises;
//add another noise
animal.noises.push('bark');
//log object animal
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Bracket notation and dot notation and for in loops
 * 2. What are the different ways of accessing elements on arrays?
 *bracket notation, for loops, various array methods
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create animals as an empty array
var animals = [];
//push animal into it
animals.push(animal);
//create duck to the preferred specifications
var duck = {
  species: 'duck',
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh']
}
//push it into animals
animals.push(duck);
//create two more animals to my own specs
var dog = {
  species: 'canine',
  name: 'Bingo',
  noises: ['bark', 'whimper', 'howl']
}
var skunk = {
  species: 'rodentia',
  name: 'Chiaotzu',
  noises: ['warble', 'screech', 'gassy sounds']
}
//push these into the animals array
animals.push(dog, skunk);
//log animals
console.log(animals);
//log the length of animals
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//choose a data structure for a list of friends
//assign friends to an array, bc that's the best structure for a list
var friends = [];
//create function getRandom that takes in animals array and outputs a random number of that array
function getRandom(array) {
  //have it return a random number within this index
  return Math.floor(Math.random() * array.length);
}
//use the function on animals
console.log(getRandom(animals));
//add random name to friends
friends.push('Thurbjorn');
//use brackets to add this as a property to one of the animals
animals[3].friends = friends;



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}