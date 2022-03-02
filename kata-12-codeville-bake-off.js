// requirements
// function takes list of ingredients from each bakery (A & B), as well as array of objects (recipe name, ingredients)
// return recipe name that uses an ingredient from each bakery


// iaan's master plan
// compass suggests making a helper function ingredientCheck() to check if given bakery has ingredients for that recipe
// 
// helper function takes bakery list, and recipe list
// use nested for loops to check both lists
// if matching ingredient, push recipe to return list
// 
// chooseRecipe function takes bakeryA list, bakeryB list, recipe array
// calls helper function ingredientCheck for bakeryA, saves return array to bakeryAList
// calls helper function ingredientCheck for bakeryB, saves return array to bakeryBList
// use nested for loops to check bakeryAList against bakeryBList, return match



const ingredientCheck = function(bakery, recipeList) {
  let result = [];
  for (let i = 0; i < bakery.length; i++) {
    for (let j = 0; j < recipeList.length; j++) {
      for (let k = 0; k < 2; k++) {
        if (bakery[i] == recipeList[j].ingredients[k]) {
          result.push(recipeList[j].name);
        }
      }
    }
  }
  return result;
}


const chooseRecipe = function(bakeryA, bakeryB, recipes) {

  let listA = ingredientCheck(bakeryA, recipes);
  let listB = ingredientCheck(bakeryB, recipes);

  for (let i = 0; i < listA.length; i++) {
    for (let j = 0; j < listB.length; j++) {
      if (listA[i] == listB[j]) {
        return listA[i];
      }
    }
  }

  return false;

}


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));