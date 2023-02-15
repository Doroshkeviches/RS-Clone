import { handleItemContainerArray } from './handleItemContainerArray';
import { ucFirst } from './ucFirst';
import { handleCalculatorSubmit } from './handleCalculatorSubmit';
export function renderStartFood() {
  const leftContainerItems = document.getElementById(
    'leftContainerItems'
  ) as HTMLElement;
  leftContainerItems.innerHTML = '';
  fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-app-id': '80858cba',
      'x-app-key': '97177c3c508aa3ad4e34a42bf7f0ecb5',
    },
    body: JSON.stringify({
      query: 'chiken milk beef bread apple cheese',
      timezone: 'US/Eastern',
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      data.foods.forEach(
        (element: {
          photo: { thumb: string };
          food_name: string;
          nf_calories: number;
          nf_protein: number;
          nf_total_fat: number;
          nf_total_carbohydrate: number;
        }) => {
          leftContainerItems.innerHTML += `
              <div id="item_container" class="item_container">
                        <div class="calculator_item_main">
                          <div class="photo">
                          <div class="photo_container">
                          <img class="photo_image" src="${
                            element.photo.thumb
                          }" alt="food_photo">
                          </div>
                              <p id="containerItemFoodName">${ucFirst(
                                element.food_name
                              )}</p>
                          </div>
                          <div id="foodItemPopup">
                          <svg id="svgArrow" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 128 128 208 48 128" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="208 48 128 128 48 48" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>
                          </div>
                          </div>
                          <div class="item_container_calculator disabled" id="item_container_calculator">
                              <input type="number" value="" id="Item_container_calculator_input" placeholder="100">
                              <div id="calculatorSumbit">Submit</div>
                              <div class="item_container_nutrients">
                                  <div class="kcal">
                                      kcal
                                      <p id="containerItemKcal">${
                                        element.nf_calories
                                      }</p>
                                  </div>
                                  <div class="containerItemNutrient">
                                      Protein
                                      <p id="containerItemProtein">${
                                        element.nf_protein
                                      }</p>
                                  </div>
                                  <div class="containerItemNutrient">
                                      Fat
                                      <p id="containerItemFat">${
                                        element.nf_total_fat
                                      }</p>
                                  </div>
                                  <div class="containerItemNutrient">
                                      Carbohydrate
                                      <p id="containerItemCarbohydrate">${
                                        element.nf_total_carbohydrate
                                      }</p>
                                  </div>
                              </div>
                          </div>
                      </div>
              `;
        }
      );
      handleItemContainerArray();
      handleCalculatorSubmit();
    });
}
