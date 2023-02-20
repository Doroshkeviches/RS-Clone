import { updateUser } from '../../registrationPage/scripts/registration/updateUserFetch';
import { loadImage } from './loadImage';
export function disabledInputSaveBtn() {
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
  loadImage();
  const profileNameInput = document.getElementById(
    'profileNameInput'
  ) as HTMLInputElement;
  const profileWeightInput = document.getElementById(
    'profileWeightInput'
  ) as HTMLInputElement;
  const profileHeightInput = document.getElementById(
    'profileHeightInput'
  ) as HTMLInputElement;
  const profileAgeInput = document.getElementById(
    'profileAgeInput'
  ) as HTMLInputElement;
  const profileActivityInput = document.getElementById(
    'profileActivityInput'
  ) as HTMLInputElement;
  const genderCollection = document.getElementsByName(
    'gender'
  ) as NodeListOf<HTMLInputElement>;
  const username = localStorage.getItem('username') as string;
  let gender = 'Male';
  genderCollection.forEach((item) => {
    if (item.checked) {
      gender = item.value;
    }
  });

  const name = profileNameInput.value;
  const weight = profileWeightInput.value;
  const height = profileHeightInput.value;
  const age = profileAgeInput.value;
  const activity = profileActivityInput.value;
  updateUser(username, name, gender, weight, height, age, activity);
}
