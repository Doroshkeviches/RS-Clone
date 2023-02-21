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
      // const currentUrl = window.location.href;
      // window.location.href = `${currentUrl}#Calculator`; TODO Change Calculator to  Workout
    });
}
