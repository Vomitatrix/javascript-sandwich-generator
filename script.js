const button = document.querySelector('button');
let ingredientOne = document.getElementById('ingredient-one');
let ingredientTwo = document.getElementById('ingredient-two');
let ingredientThree = document.getElementById('ingredient-three');
let ingredientFour = document.getElementById('ingredient-four');

const protein = ['Turkey', 'Tuna', 'Pastrami', 'Chicken', 'Crab', 'Egg salad'];
const veggie = ['Lettuce', 'Tomato', 'Avocado', 'Onion', 'Apple', 'Pickle'];
const other = ['Cheese', 'Dill', 'Salt and pepper', 'rollSauce', 'rollVeggie', 'rollProtein'];
const sauce =['Mayo', 'Ketchup', 'Red wine vinegar', 'Mustard', 'Peanut butter', 'Chick-fil-A'];


button.addEventListener('click', generateSandwich);

function generateSandwich() {
    let rgnOne = Math.floor(Math.random() * 6);
    let rgnTwo = Math.floor(Math.random() * 6);
    let rgnThree = Math.floor(Math.random() * 6);
    let rgnFour = Math.floor(Math.random() * 6);
    let selectionThree;

    switch (rgnThree) {
        case 3:
            selectionThree = sauce[Math.floor(Math.random() * 6)];
            break;
        case 4:
            selectionThree = veggie[Math.floor(Math.random() * 6)];
            break;
        case 5:
            selectionThree = protein[Math.floor(Math.random() * 6)];
            break;
        default:
            selectionThree = other[rgnThree];
    }

    ingredientOne.textContent = `- ${protein[rgnOne]}`;
    ingredientTwo.textContent = `- ${veggie[rgnTwo]}`;
    ingredientThree.textContent = `- ${selectionThree}`;
    ingredientFour.textContent = `- ${sauce[rgnFour]}`;
}