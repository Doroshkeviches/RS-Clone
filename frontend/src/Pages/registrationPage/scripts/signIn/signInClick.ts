export function signInBtn() {
  const signIn = document.getElementById('signIn') as HTMLElement;
  const signUp = document.getElementById('loginLink') as HTMLElement;
  signIn.addEventListener('click', () => {
    const submit = document.getElementById('submit') as HTMLElement;
    submit.innerHTML = 'Sign In';
    signIn.style.fontSize = '40px';
    signUp.style.fontSize = '16px';
  });
}
