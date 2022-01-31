

// const pizza = document.querySelector(".pizza");
// const kinderCountry = document.querySelector(".kinder-country");
// const carrot = document.querySelector(".carrot");
// const result = document.querySelector(".kcal-result");


// let kcalResult = 0

// pizza.addEventListener('click', ()=>{
//     const pizzaGrams = document.querySelector(".pizza-grams").value;
//     kcalResult = kcalResult + (treats.pizza.kcal)/100*pizzaGrams;
//     result.innerHTML = kcalResult;

//     productToCalories(pizza, pizzaGrams);
// });

// carrot.addEventListener('click', ()=>{
//     const carrotGrams = document.querySelector(".carrot-grams").value;
//     kcalResult = kcalResult + (veggies.carrot.kcal)/100*carrotGrams;
//     result.innerHTML = kcalResult;
// });

// function productToCalories(product, grams){
//     console.log(product, grams);
// }

const mainSection = document.querySelector(".main-section");
const infoHandler = document.createElement('div');
infoHandler.classList.add('food-div');

let result = 0;

function createFoodDiv(eachFood){
    const foodDiv = document.createElement('div');
    const gramBar = document.createElement('input');
    gramBar.type = 'text';
    gramBar.placeholder = 'grams';
    gramBar.classList.add('gram-bar', eachFood);
    foodDiv.classList.add('food-div');
    if(eachFood in treats){
        foodDiv.classList.add('treat');
    }else if(eachFood in veggies){
        foodDiv.classList.add('veggie');
    }else if(eachFood in meats){
        foodDiv.classList.add('meat');
    }
    foodDiv.innerText = eachFood;
    mainSection.append(foodDiv);
    foodDiv.append(gramBar); 
}

//Drukowanie wszsytkich nutriences
function foodInfo(nutrienceType, nutritionAmount){   
    const eachInfo = document.createElement('p');
    eachInfo.classList.add('nutrition-info');
    eachInfo.innerText = nutrienceType + ':';
    const eachInfoValue = document.createElement('p');
    eachInfoValue.classList.add('each-food-info-value');
    nutrienceType !== 'kcal' && nutrienceType !== 'info' ? eachInfoValue.innerText = nutritionAmount + ' grams' : eachInfoValue.innerText = nutritionAmount;
    mainSection.append(infoHandler);
    infoHandler.append(eachInfo);
    eachInfo.append(eachInfoValue);
}

function allFoods(){
    for(let eachFood in treats){
        createFoodDiv(eachFood);
        // Dostep do wszystkich nutriences:
        for(let nutrienceType in treats[eachFood]){
                let nutritionAmount = treats[eachFood][nutrienceType];
                console.log(nutritionAmount);
                // foodInfo(nutrienceType, nutritionAmount);
            };
    };

    for(let eachFood in veggies){
        createFoodDiv(eachFood);
        for(let nutrienceType in veggies[eachFood]){
            let nutritionAmount = veggies[eachFood][nutrienceType];
            //foodInfo(nutrienceType, nutritionAmount);
        };
        
    };

    for(let eachFood in meats){
        createFoodDiv(eachFood);
        for(let nutrienceType in meats[eachFood]){
            let nutritionAmount = meats[eachFood][nutrienceType];
            //foodInfo(nutrienceType, nutritionAmount);
        };
        
    };
    
}

allFoods();


