import { getFruitTypes as getFruitTypes } from "./FruitSelector.js";
import { getFruitAmounts } from "./AmountSelector.js"

// number of fruit types in recipe
const RECIPE_LENGTH = 4;

// construct 2d array containing amount and type of each fruit
// ex: [[3, banana], [2, apple] ... ]
export function buildRecipe() {
    const fruitList = getFruitTypes(RECIPE_LENGTH);
    const fruitAmounts = getFruitAmounts(fruitList)

    let recipe = new Array(RECIPE_LENGTH)
    for (let i = 0; i < RECIPE_LENGTH; i++) {
        recipe[i] = [fruitAmounts[i], fruitList[i]]
    }

    return recipe
}