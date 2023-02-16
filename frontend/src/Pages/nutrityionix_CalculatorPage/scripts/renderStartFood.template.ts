import { ucFirst } from "./ucFirst";
export function renderStartFoodHtml(
    photo: string,
    food_name: string,
    nf_calories: number,
    nf_protein: number,
    nf_total_fat: number,
    nf_total_carbohydrate: number) {

    const leftContainerItems = document.getElementById(
        'leftContainerItems'
      ) as HTMLElement;
      leftContainerItems.innerHTML = '';
    leftContainerItems.innerHTML += `
                  <div id="item_container" class="item_container">
                            <div class="calculator_item_main">
                              <div class="photo">
                              <div class="photo_container">
                              <img class="photo_image" src="${
                                photo
                              }" alt="food_photo">
                              </div>
                                  <p id="containerItemFoodName">${ucFirst(
                                    food_name
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
                                            nf_calories
                                          }</p>
                                      </div>
                                      <div class="containerItemNutrient">
                                          Protein
                                          <p id="containerItemProtein">${
                                            nf_protein
                                          }</p>
                                      </div>
                                      <div class="containerItemNutrient">
                                          Fat
                                          <p id="containerItemFat">${
                                            nf_total_fat
                                          }</p>
                                      </div>
                                      <div class="containerItemNutrient">
                                          Carbohydrate
                                          <p id="containerItemCarbohydrate">${
                                            nf_total_carbohydrate
                                          }</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                  `;
}