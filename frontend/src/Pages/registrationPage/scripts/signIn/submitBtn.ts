import { loginFetch } from './loginFetch';
import { createUser } from '../registration/registrationFetch';
export function handleSubmit() {
  const submitBtn = document.getElementById('submit') as HTMLElement;
  submitBtn.addEventListener('click', () => {
    const username = <HTMLInputElement>document.getElementById('username');
    const password = <HTMLInputElement>document.getElementById('password');
    localStorage.setItem('username', `${username.value}`);
    if (submitBtn.innerHTML === 'Sign In') {
      loginFetch(username.value, password.value);
    } else if (submitBtn.innerHTML === 'Sign Up') {
      const dataMessage: string = createUser(username.value, password.value);
      const messageEl = document.getElementById('message') as HTMLElement;
      messageEl.innerHTML = dataMessage;
    }
  });
}
