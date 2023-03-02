import { handleSearchBtn } from './scripts/handleSearchBtn';
import { renderStartFood } from './scripts/renderStartFood';
export function renderNutritionixPage() {
  renderStartFood();
  handleSearchBtn();
}
