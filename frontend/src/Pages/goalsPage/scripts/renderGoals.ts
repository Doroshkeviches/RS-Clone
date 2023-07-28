import { addGoalItem } from './addGoalItem';
import { handleCheckbox } from './handleCheckbox';
export function renderGoals() {
  const goals = localStorage.getItem('goals') as string;
  if (goals !== '') {
    const goalsArray = goals.split(',');
    goalsArray.forEach((element) => {
      addGoalItem(element);
    });
  }
  handleCheckbox();
}
