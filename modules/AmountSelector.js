import {getRandomInt} from "./Utilities.js"

const MIN_AMOUNT = 1;
const MAX_AMOUNT = 6;

export function getFruitAmounts(fruitList) {   
    let fruitAmounts = new Array(fruitList.length);

    for (let i = 0; i < fruitList.length; i++) {
        fruitAmounts[i] = getRandomInt(MIN_AMOUNT, MAX_AMOUNT);
    }

    return fruitAmounts
}