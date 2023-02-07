import { renderRegistrationPage } from './renderRegistrationPage';

export function registrationFetch(username: string, password: string) {
  const message = document.getElementById('message') as HTMLElement;
  fetch(`http://localhost:5000/auth/registration`, {
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
