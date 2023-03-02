import { handleSubmitBtn } from './scripts/handleSubmitBtn';
import { handleAddGoalBtn } from './scripts/handleAddGoalBtn';
import { renderGoals } from './scripts/renderGoals';
export function renderGoalPage() {
  handleSubmitBtn();
  handleAddGoalBtn();
  renderGoals();
}
