import { handleEdit } from './handleEdit';
import { handleSave } from './handleSave';
export function renderProfileContainer(
  name: string,
  gender: string,
  weight: number,
  height: number,
  age: number,
  activity: number
) {
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
  genderCollection.forEach((item) => {
    if (item.value === gender) {
      item.checked = true;
    }
  });
  profileNameInput.value = name;
  profileWeightInput.value = `${weight}`;
  profileHeightInput.value = `${height}`;
  profileAgeInput.value = `${age}`;
  profileActivityInput.value = `${activity}`;
  handleEdit();
  handleSave();
}
