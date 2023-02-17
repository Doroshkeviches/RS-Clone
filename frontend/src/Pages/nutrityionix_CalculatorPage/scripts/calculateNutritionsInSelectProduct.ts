import { calculateTotalNutritions } from './calculateTotalNutritions';
import { removeTotalContainerItem } from './removeTotalContainerItem';
import { ucFirst } from './ucFirst';
export function calculateNutritionsInSelectProduct(
  container: HTMLElement,
  weight: number
) {
  const calculateWeight = 100;
  const foodName = (
    container.querySelector('#containerItemFoodName') as HTMLElement
  ).innerHTML;
  const foodKcal = (
    (+(container.querySelector('#containerItemKcal') as HTMLElement).innerHTML *
      weight) /
    calculateWeight
  ).toFixed(2);
  const foodProtein = (
    (+(container.querySelector('#containerItemProtein') as HTMLElement)
      .innerHTML *
      weight) /
    calculateWeight
  ).toFixed(2);
  const foodFat = (
    (+(container.querySelector('#containerItemFat') as HTMLElement).innerHTML *
      weight) /
    calculateWeight
  ).toFixed(2);
  const foodCarbohydrate = (
    (+(container.querySelector('#containerItemCarbohydrate') as HTMLElement)
      .innerHTML *
      weight) /
    calculateWeight
  ).toFixed(2);
  const totalContainer = document.getElementById(
    'total_container'
  ) as HTMLElement;
  totalContainer.innerHTML += `
    <div class="total_container_item">
    <div id="total_container_item_foodName">${ucFirst(foodName)}</div>
    <div id="total_container_item_nutritions">
        <div  id="total_container_item_nutritions_kcal"><p>Kcal</p>  <div id="day_kcal">${foodKcal}</div></div>
        <div  id="total_container_item_nutritions_protein"><p>Protein</p> <div id="day_protein">${foodProtein}</div></div>
        <div  id="total_container_item_nutritions_fat"><p>Fat</p>  <div id="day_fat">${foodFat}</div></div>
        <div  id="total_container_item_nutritions_carbohydrate"><p>Carbohydrate</p> <div id="day_carbohydrate">${foodCarbohydrate}</div></div>
    </div>
    <div id="total_container_item_weight">${weight}g</div>
    <div id="total_container_item_remove">X</div>
  
  
  </div>
    `;
  calculateTotalNutritions(foodKcal, foodProtein, foodFat, foodCarbohydrate);
  removeTotalContainerItem();
}
