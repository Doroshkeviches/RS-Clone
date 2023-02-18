import { registrationPageInit } from './registrationPage/scripts';
import { renderNutritionixPage } from './nutrityionix_CalculatorPage';
import { fillWorckoutTemplate } from './Workout/components/fill.Workout.template';
import { switchHeaderActive } from './header/switchActivePage';

export function initPage(url: string) {
  const header = document.querySelector('header') as HTMLElement;
  header.style.display = 'block';
  switchHeaderActive(url);
  switch (url) {
    case '':
    case 'autorization':
      header.style.display = 'none';
      registrationPageInit();
      break;
    case 'Workout':
      fillWorckoutTemplate('Workout');
      break;
    case 'Exercises':
      fillWorckoutTemplate('Exercises');
      break;
    case 'Calculator':
      renderNutritionixPage();
  }
}
