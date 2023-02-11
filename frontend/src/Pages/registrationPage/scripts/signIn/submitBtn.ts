import { login } from './loginFetch';
import { createUser } from '../registration/registrationFetch';
export function handleSubmit() {
  const submitBtn = document.getElementById('submit') as HTMLElement;
  submitBtn.addEventListener('click', () => {
    const username = <HTMLInputElement>document.getElementById('username');
    const password = <HTMLInputElement>document.getElementById('password');
    localStorage.setItem('username', `${username.value}`);
    if (submitBtn.innerHTML === 'Sign In') {
      login(username.value, password.value);
    } else if (submitBtn.innerHTML === 'Sign Up') {
      createUser(username.value, password.value);
    }
  });
}
