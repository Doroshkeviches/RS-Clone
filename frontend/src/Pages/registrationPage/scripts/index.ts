import { handleSignUp } from './signUp/signUpClick';
import { handleSignIn } from './signIn/signInClick';
import { handleSubmit } from './signIn/submitBtn';
export function registrationPageInit() {
  handleSignUp();
  handleSignIn();
  handleSubmit();
}
