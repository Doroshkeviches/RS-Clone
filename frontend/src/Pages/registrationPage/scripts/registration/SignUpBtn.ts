import { updateUserFetch } from './updateUserFetch';
export function SignUpBtn() {
  const name = document.getElementById('name') as HTMLInputElement;
  const weight = document.getElementById('weight') as HTMLInputElement;
  const height = document.getElementById('height') as HTMLInputElement;
  const age = document.getElementById('age') as HTMLInputElement;
  const activity = document.getElementById('activity') as HTMLInputElement;
  const genderCollection: NodeListOf<HTMLElement> =
    document.getElementsByName('gender');
  const username = localStorage.getItem('username') as string;
  let gender = '';
  genderCollection.forEach((item) => {
    if ((item as HTMLInputElement).checked === true) {
      gender = (item as HTMLInputElement).value;
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
