import { handleSignUp } from './signUp/signUpClick';
import { signInBtnChange } from './signIn/signInClick';
import { handleSubmit } from './signIn/submitBtn';
export function registrationPageInit() {
  handleSignUp();
  signInBtnChange();
  handleSubmit();
}
