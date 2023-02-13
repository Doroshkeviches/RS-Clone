import { navWorckoutTemplate } from './nav.template';
import {
  createCellTemplate,
  linksToNewWorckoutTemplate,
} from './сellsWorckout.template';

export function createWorckoutTemplate(sectionName: 'Workout' | 'Exercises') {
  //TODO add Fetch
  const trainList = createTrainList(sectionName);
  const WorkoutTemplate = `
    <div class="container">
     ${navWorckoutTemplate}
      <div class="main__menu-workout">
        <ul class="menu-workout__list">
        ${trainList}
        </ul>
      </div>
    </div>`;
  return WorkoutTemplate;
}

export function createTrainList(sectionName: 'Workout' | 'Exercises') {
  let template = '';
  for (let i = 0; i < 8 /*TODO Switch to Workout amount*/; i++) {
    if (sectionName === 'Workout') {
      if (i === 0) {
        template += linksToNewWorckoutTemplate;
      } else {
        template += createCellTemplate(); //TODO addParam
      }
    } else {
      template += createCellTemplate(); //TODO addParam
    }
  }
  return template;
}
