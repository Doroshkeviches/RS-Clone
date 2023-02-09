import { component, headerTemplate } from '../../header/header.template';
import { navWorckoutTemplate } from './nav.template';
import {
  cellWorckoutTemplate,
  linksToNewWorckoutTemplate,
} from './сellsWorckout.template';

export const WorkoutTemplate: component = {
  template: `
  ${headerTemplate.template}
  <main class="main">
    <div class="container">
     ${navWorckoutTemplate.template}
      <div class="main__menu-workout">
        <ul class="menu-workout__list">
        ${createWorkoutTemplate()}
        </ul>
      </div>
    </div>
  </main>`,
};

function createWorkoutTemplate() {
  const div = document.createElement('div') as HTMLElement;
  for (let i = 0; i < 8 /*TODO Switch to Workout amount*/; i++) {
    if (i === 0) {
      div.innerHTML += linksToNewWorckoutTemplate.template;
    } else {
      div.innerHTML += cellWorckoutTemplate.template; //TODO Switch to Funck CreateCellWorckout
    }
  }
  return div.innerHTML;
}

export function fillBody() {
  const body = document.querySelector('body') as HTMLElement;
  body.innerHTML = WorkoutTemplate.template;
}
