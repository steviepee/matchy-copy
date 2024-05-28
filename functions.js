/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function search that takes an array and the string of a name
function search(array, string) {
    //iterate through the array
    for (var i = 0; i < array.length; i++) {
        //if the name matches the name of an object in the array
        if (array[i].name === string) {
            //return the object with that name
            return array[i];
        }
    }//if the name doesn't match any names in the array, return null
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function that takes in 3 specified parameters
function replace(animals, name, replacement) {
    //iterate over the animals array.
    for (i = 0; i < animals.length; i++) {
        //if the name parameter matches an object name
        if (animals[i].name === name) {
            //replace the entire object with the replacement parameter
           animals[i] = replacement;
           return animals;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//make a function remove with the specified parameters
function remove(animals, name) {
    //iterate over the array
    for (i = 0; i < animals.length; i++) {
        //if the names match
        if (animals[i].name === name) {
            //remove the object from the array
           animals.splice(i, 1);
           return animals;
        } 
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}