import { changePopupDisplay } from './changePopupDisplay';
export function handleAddGoalBtn() {
  const addGoalBtn = document.getElementById('addGoalBtn') as HTMLElement;
  addGoalBtn.addEventListener('click', changePopupDisplay);
}
