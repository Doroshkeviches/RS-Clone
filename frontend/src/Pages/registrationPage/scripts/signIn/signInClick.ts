import i18n from 'i18next';
export function handleSignIn() {
  const signIn = document.getElementById('signIn') as HTMLElement;
  const signUp = document.getElementById('signUpHeader') as HTMLElement;
  signIn.addEventListener('click', () => {
    const submit = document.getElementById('submit') as HTMLElement;
    submit.innerHTML = i18n.t('signIn.title');
    signIn.style.fontSize = '40px';
    signUp.style.fontSize = '16px';
  });
}
