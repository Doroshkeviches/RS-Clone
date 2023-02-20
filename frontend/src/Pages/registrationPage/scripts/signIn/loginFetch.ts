import { url } from '../../../../constants';
export function login(username: string, password: string) {
  const localUrl = 'http://localhost:8080/';
  const message = document.getElementById('message') as HTMLElement;
  fetch(url + `login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      message.innerHTML = data.message;
      if (!data.token) {
        message.innerHTML = data.message;
      } else {
        const currentUrl = window.location.href;
        if (currentUrl === localUrl) {
          window.location.href = `${currentUrl}#Calculator`; //TODO Change Calculator to  Workout
        }
      }
    });
}
