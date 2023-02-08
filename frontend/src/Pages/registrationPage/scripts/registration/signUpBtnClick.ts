import { getInputsValues } from './SignUpBtn';
export function SignUpBtnClickListener() {
  const SignUp = document.getElementById('SignUpBtn') as HTMLElement;
  SignUp.addEventListener('click', getInputsValues);
}
