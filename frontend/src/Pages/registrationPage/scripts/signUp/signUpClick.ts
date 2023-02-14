import i18n from 'i18next';
export function handleSignUp() {
  const signIn = document.getElementById('signIn') as HTMLElement;
  const signUp = document.getElementById('signUpHeader') as HTMLElement;
  signUp.addEventListener('click', () => {
    const submit = document.getElementById('submit') as HTMLElement;
    signIn.style.fontSize = '16px';
    signUp.style.fontSize = '40px';
    submit.innerHTML = i18n.t('signUp.title');
  });
}
