import { registrationPageInit } from './registrationPage/scripts';

export function addFunctionalToPage(url: string) {
  switch (url) {
    case '':
      registrationPageInit();
      break;
    case 'autorization':
      registrationPageInit();
      break;
  }
}
