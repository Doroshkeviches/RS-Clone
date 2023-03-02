import { renderStartFood } from './renderStartFood';
import { renderSearchFood } from './renderSearchFood';
export function searchFoodFetch(string: string) {
  if (!string) {
    renderStartFood();
  }
  fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-app-id': '80858cba',
      'x-app-key': '97177c3c508aa3ad4e34a42bf7f0ecb5',
    },
    body: JSON.stringify({
      query: `${string}`,
      timezone: 'US/Eastern',
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      renderSearchFood(data);
    });
}
