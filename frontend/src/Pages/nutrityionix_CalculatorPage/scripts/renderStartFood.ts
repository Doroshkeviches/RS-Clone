import { handleItemContainerArray } from './handleItemContainerArray';
import { handleCalculatorSubmit } from './handleCalculatorSubmit';
import { renderStartFoodHtml } from './renderStartFood.template';
export function renderStartFood() {
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
          renderStartFoodHtml(
            element.photo.thumb,
            element.food_name,
            element.nf_calories,
            element.nf_protein,
            element.nf_total_fat,
            element.nf_total_carbohydrate
          );
          handleItemContainerArray();
          handleCalculatorSubmit();
        }
      );
    });
}
