import { arrayOfGoals } from './arrayOfGoals';
export function setGoalsToLocalStorage() {
  arrayOfGoals.length = 0;
  const goalCollection = document.querySelectorAll('#goalItem');
  goalCollection.forEach((item) => {
    const goalItem = (item.querySelector('#labelText') as HTMLElement)
      .innerHTML as string;
    arrayOfGoals.push(goalItem);
  });
  localStorage.setItem('goals', arrayOfGoals.join(','));
}
