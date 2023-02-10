import { fillProfileValues } from './SignUpBtn';
export function handleSignUpBtn() {
  const SignUp = document.getElementById('SignUpBtn') as HTMLElement;
  SignUp.addEventListener('click', fillProfileValues);
}
