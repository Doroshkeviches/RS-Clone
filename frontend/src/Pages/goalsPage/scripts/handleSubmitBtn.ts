import { getInputValue } from './getInputTextValue';
import { setGoalsToLocalStorage } from './setGoalsToLocalStorage';
import { handleCheckbox } from './handleCheckbox';
export function handleSubmitBtn() {
  const goalPopup = document.getElementById('goalPopup') as HTMLElement;
  const popupSubmit = document.getElementById('popupSubmit') as HTMLElement;
  popupSubmit.addEventListener('click', () => {
    getInputValue();
    handleCheckbox();
    setGoalsToLocalStorage();
    const background = document.getElementById('background') as HTMLElement;
    background.classList.remove('popupActive');
    goalPopup.style.display = 'none';
  });
}
