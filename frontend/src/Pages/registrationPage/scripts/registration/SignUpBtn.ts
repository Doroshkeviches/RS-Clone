import { updateUserFetch } from './updateUserFetch';
export function getInputsValues() {
  const name = document.getElementById('name') as HTMLInputElement;
  const weight = document.getElementById('weight') as HTMLInputElement;
  const height = document.getElementById('height') as HTMLInputElement;
  const age = document.getElementById('age') as HTMLInputElement;
  const activity = document.getElementById('activity') as HTMLInputElement;
  const genderCollection = document.getElementsByName(
    'gender'
  ) as NodeListOf<HTMLInputElement>;
  const username = localStorage.getItem('username') as string;
  let gender = 'Male';
  genderCollection.forEach((item) => {
    if (item.checked === true) {
      gender = item.value;
    }
  });
  updateUserFetch(
    username,
    name.value,
    gender,
    weight.value,
    height.value,
    age.value,
    activity.value
  );
}
