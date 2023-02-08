import { renderRegistrationPage } from './renderRegistrationPage';
import { url } from '../../../../constants';
export function registrationFetch(username: string, password: string) {
  const message = document.getElementById('message') as HTMLElement;
  fetch(url + 'registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      message.innerHTML = `${data.message}`;
      if (data.message === 'The user has been successfully registered') {
        renderRegistrationPage();
      }
    });
}
