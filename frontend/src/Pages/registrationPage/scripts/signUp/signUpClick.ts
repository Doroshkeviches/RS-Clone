export function signUpClickListener() {
  const signIn = document.getElementById('signIn') as HTMLElement;
  const signUp = document.getElementById('loginLink') as HTMLElement;
  const loginLink = document.getElementById('loginLink') as HTMLElement;
  loginLink.addEventListener('click', () => {
    const submit = document.getElementById('submit') as HTMLElement;
    signIn.style.fontSize = '16px';
    signUp.style.fontSize = '40px';
    submit.innerHTML = 'Sign Up';
  });
}
