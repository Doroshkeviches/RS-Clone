import { signUpClick } from './signUp/signUpClick';
import { signInBtn } from './signIn/signInClick';
import { submitClick } from './signIn/submitBtn';
export function regPageStart() {
  signUpClick();
  signInBtn();
  submitClick();
}
