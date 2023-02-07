import { signUpClick } from './signUp/signUpClick';
import { signInBtnChange } from './signIn/signInClick';
import { submitClick } from './signIn/submitBtn';
export function regPageStart() {
  signUpClick();
  signInBtnChange();
  submitClick();
}
