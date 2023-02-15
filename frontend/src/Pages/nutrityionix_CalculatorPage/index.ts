import { nutritionCalculator } from './scripts/nutritionContainer.template';
import { handleSearchBtn } from './scripts/handleSearchBtn';
import { renderStartFood } from './scripts/renderStartFood';
export function renderNutritionixPage() {
  const container = document.getElementById('container') as HTMLElement;
  container.innerHTML = `${nutritionCalculator.template}`;
  renderStartFood();
  handleSearchBtn();
}
