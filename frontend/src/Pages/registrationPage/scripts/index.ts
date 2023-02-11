import { handleSignUp } from './signUp/signUpClick';
import { handleSignIn } from './signIn/signInClick';
import { handleSubmit } from './signIn/submitBtn';

export function registrationPageInit() {
  const header = document.querySelector('header') as HTMLElement;
  header.style.display = 'none';
  handleSignUp();
  handleSignIn();
  handleSubmit();
}
