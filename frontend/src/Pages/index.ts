import { registrationPageInit } from './registrationPage/scripts';
import { createWorckoutTemplate } from '../Pages/Workout/components/Workout.template';

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
      createWorckoutTemplate('Workout');
      break;
    case 'Exercises':
      createWorckoutTemplate('Exercises');
      break;
  }
}
