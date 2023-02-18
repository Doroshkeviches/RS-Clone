import { registrationPageInit } from './registrationPage/scripts';
import { renderNutritionixPage } from './nutrityionix_CalculatorPage';

export function initPage(url: string) {
  const header = document.querySelector('header') as HTMLElement;
  header.style.display = 'block';
  switch (url) {
    case '':
    case 'autorization':
      header.style.display = 'none';
      registrationPageInit();
      break;
    case 'Calculator':
      renderNutritionixPage();
  }
}
