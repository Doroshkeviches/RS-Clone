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
    goalPopup.style.display = 'none';
  });
}
