import { registrationPageInit } from './registrationPage/scripts';

export function addFunctionalToPage(url: string) {
  const header = document.querySelector('header') as HTMLElement;
  header.style.display = 'block';
  switch (url) {
    case '':
      header.style.display = 'none';
      registrationPageInit();
      break;
    case 'autorization':
      header.style.display = 'none';
      registrationPageInit();
      break;
  }
}
