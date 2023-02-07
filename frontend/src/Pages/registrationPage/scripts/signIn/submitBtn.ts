import { loginFetch } from './loginFetch';
import { registrationFetch } from '../registration/registrationFetch';
export function submitClick() {
  const submitBtn = document.getElementById('submit') as HTMLElement;
  submitBtn.addEventListener('click', () => {
    const username = <HTMLInputElement>document.getElementById('username');
    const password = <HTMLInputElement>document.getElementById('password');
    localStorage.setItem('username', `${username.value}`);
    if (submitBtn.innerHTML === 'Sign In') {
      loginFetch(username.value, password.value);
    } else if (submitBtn.innerHTML === 'Sign Up') {
      registrationFetch(username.value, password.value);
    }
  });
}
