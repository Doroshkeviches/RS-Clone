import { SignUpBtn } from './SignUpBtn';
export function SignUpBtnClick() {
  const SignUp = document.getElementById('SignUpBtn') as HTMLElement;
  SignUp.addEventListener('click', SignUpBtn);
}
