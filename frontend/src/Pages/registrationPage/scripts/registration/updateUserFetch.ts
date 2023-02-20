import { url } from '../../../../constants';
export function updateUser(
  username: string,
  name: string,
  gender: string,
  weight: string,
  height: string,
  age: string,
  activity: string
) {
  const localUrl = 'http://localhost:8080/';
  fetch(url + `updateUser`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      name,
      gender,
      activity,
      weight,
      height,
      age,
    }),
  })
    .then((res) => res.json())
    .then(() => {
      const currentUrl = window.location.href;
      if (currentUrl === localUrl) {
        window.location.href = `${currentUrl}#Workout`;
      }
    });
}
