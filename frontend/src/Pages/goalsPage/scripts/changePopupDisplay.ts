export function changePopupDisplay() {
  const goalPopup = document.getElementById('goalPopup') as HTMLElement;
  const background = document.getElementById('background') as HTMLElement;
  background.classList.add('popupActive');
  goalPopup.style.display = 'block';
}
