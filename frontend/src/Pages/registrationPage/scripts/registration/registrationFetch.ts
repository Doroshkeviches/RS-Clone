import { renderRegistrationPage } from './renderRegistrationPage';
import { url } from '../../../../constants';
export function createUser(username: string, password: string) {
  let message = '';
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
      message = data.message;
      if (data.message === 'The user has been successfully registered') {
        renderRegistrationPage();
      }
    });
  return message;
}
