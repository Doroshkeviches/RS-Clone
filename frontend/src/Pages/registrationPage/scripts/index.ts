import { signUpClickListener } from './signUp/signUpClick';
import { signInBtnChange } from './signIn/signInClick';
import { submitClickListener } from './signIn/submitBtn';
export function regPageStart() {
  signUpClickListener();
  signInBtnChange();
  submitClickListener();
}
