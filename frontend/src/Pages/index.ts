import { registrationPageInit } from './registrationPage/scripts';
import { fillWorckoutTemplate } from './Workout/components/fill.Workout.template';

export function initPage(url: string) {
  const header = document.querySelector('header') as HTMLElement;
  header.style.display = 'block';
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
  }
}
