import { buildRecipe } from "./RecipeBuilder.js";


window.addEventListener("load", () => {
    generateRecipe();
    document.getElementById("generateBtn").addEventListener("click", generateRecipe);
})

function generateRecipe() {
    displayRecipe(buildRecipe());
}

// create HTML representation of recipe
function formatRecipe(recipe) {
    let recipeHTML = ""

    for (let i = 0; i < recipe.length; i++) {
        recipeHTML += `<li>${recipe[i][0]}: ${recipe[i][1]}</li>\n`
    }

    return `<ul>\n${recipeHTML}</ul>`
}

// display recipe to user
function displayRecipe(recipe) {
    const displayElem = document.getElementById("recipeDisplay");
    displayElem.innerHTML = formatRecipe(recipe);
}