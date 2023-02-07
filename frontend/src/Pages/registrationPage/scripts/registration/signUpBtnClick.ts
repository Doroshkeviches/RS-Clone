import { getInputsValues } from './SignUpBtn';
export function SignUpBtnClick() {
  const SignUp = document.getElementById('SignUpBtn') as HTMLElement;
  SignUp.addEventListener('click', getInputsValues);
}
