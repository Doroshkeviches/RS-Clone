import { addGoalItem } from './addGoalItem';
export function getInputValue() {
  const goalInputText = document.getElementById(
    'goalInputText'
  ) as HTMLInputElement;
  addGoalItem(goalInputText.value);
  goalInputText.value = '';
}
