import {FruitError} from "./Errors.js";
import {getRandomInt} from "./Utilities.js"

// fruits which may be used in the salad
const FRUITS = [
    "Bananana",
    "Orange",
    "Eggplant",
    "Apple",
    "Pineapple",
    "Pen"
] 

// get array of fruit types to use
// ex [Apple, Banana, ...]
export function getFruitTypes(numOfFruits) {
    if (numOfFruits > FRUITS.length) throw new FruitError("OMG TOO MANY FRUITS");

    // clone FRUITS
    let fruits = FRUITS.slice(0);

    let selectedFruits = [];
    for(let i = 0; i < numOfFruits; i++) {
        const fruit = fruits.splice(getRandomInt(0, fruits.length), 1)[0];
        selectedFruits.push(fruit);
    }

    return selectedFruits;
}

