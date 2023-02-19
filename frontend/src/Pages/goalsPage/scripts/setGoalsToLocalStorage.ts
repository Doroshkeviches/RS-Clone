import { createArrayOfGoals } from './createArrayofGoals';
export function setGoalsToLocalStorage() {
  localStorage.setItem('goals', createArrayOfGoals());
}
