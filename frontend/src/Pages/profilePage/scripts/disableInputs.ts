export function disableInputs() {
  const logoInput = document.getElementById('logo_input') as HTMLElement;
  const container = document.getElementById('profileContainer') as HTMLElement;
  const profileBtnSave = document.getElementById(
    'profileBtnSave'
  ) as HTMLButtonElement;
  const inputsCollection = container.querySelectorAll(
    '.inputProfileCollection'
  ) as NodeListOf<HTMLInputElement>;
  profileBtnSave.disabled = true;
  logoInput.classList.remove('profileDisabled');
  inputsCollection.forEach((item) => {
    item.disabled = true;
  });
}
