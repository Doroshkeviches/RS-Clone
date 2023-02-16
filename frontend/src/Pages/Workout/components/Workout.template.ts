import { navWorckoutTemplate } from './nav.template';
import {
  createCellTemplate,
  linksToNewWorckoutTemplate,
} from './сellsWorckout.template';
import { WorkoutList } from './trainMass';
import { trainObj } from './interface';

export async function createWorckoutTemplate(
  sectionName: 'Workout' | 'Exercises'
) {
  const main = document.querySelector('main') as HTMLElement;
  const trainList = await createTrainList(sectionName);
  const WorkoutTemplate = `
    <div class="container">
     ${navWorckoutTemplate}
      <div class="main__menu-workout">
        <ul class="menu-workout__list">
        ${trainList}
        </ul>
      </div>
    </div>`;
  main.innerHTML = WorkoutTemplate;
  const btn = main.querySelector(`.${sectionName}`) as HTMLElement;
  btn.classList.add('active__worckout-btn');
}

export async function createTrainList(sectionName: 'Workout' | 'Exercises') {
  let template = '';
  const trainList =
    sectionName === 'Workout' ? WorkoutList : (await exerciseRequest()) || [];

  for (let i = 0; i < trainList.length; i++) {
    if (sectionName === 'Workout') {
      if (i === 0) {
        template += linksToNewWorckoutTemplate;
      }
      template += createCellTemplate(trainList, i);
    } else {
      template += createCellTemplate(trainList, i);
    }
  }
  return template;
}

async function exerciseRequest() {
  try {
    return (await fetch(
      'http://localhost:5000/auth/exercisesList'
    )) as unknown as trainObj[];
  } catch (error) {
    console.error(error);
  }
}
