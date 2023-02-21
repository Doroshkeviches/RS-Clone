import { setGoalsToLocalStorage } from './setGoalsToLocalStorage';
export function handleCheckbox() {
  const goalContainer = document.getElementById('goalContainer') as HTMLElement;
  const goalCheckbox = document.querySelectorAll('#goalCheckbox');
  goalCheckbox.forEach((item) => {
    item.addEventListener('click', (e) => {
      const itemContainer = (e.target as HTMLTextAreaElement).closest(
        '#goalItem'
      ) as HTMLElement;
      goalContainer.removeChild(itemContainer);
      setGoalsToLocalStorage();
    });
  });
}
