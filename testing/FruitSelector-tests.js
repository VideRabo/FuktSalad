import {it, assert} from "./testing.js"
import {getFruitTypes} from "../modules/FruitSelector.js"


it("length of fruitList valid", () => {
    assert(getFruitTypes(1).length === 1);
    assert(getFruitTypes(2).length === 2);
    assert(getFruitTypes(3).length === 3);
})