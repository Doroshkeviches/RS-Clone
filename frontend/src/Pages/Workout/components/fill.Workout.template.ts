import {
  createCellTemplate,
  linksToNewWorckoutTemplate,
} from './Workout.templates';
import { WorkoutList } from './trainMass';
import { trainObj } from './interface';
import { url } from '../../../constants';

export async function fillWorckoutTemplate(
  sectionName: 'Workout' | 'Exercises'
) {
  const preLoader = document.querySelector(
    '.pre-loader__Wraper'
  ) as HTMLElement;
  preLoader.style.display = 'flex';
  const main = document.querySelector('.menu-workout__list') as HTMLElement;
  const btn = document.querySelector(`.${sectionName}`) as HTMLElement;
  btn.classList.add('active__worckout-btn');
  const trainingList = await createTrainList(sectionName);
  preLoader.style.display = 'none';
  main.innerHTML = trainingList;
}

export async function createTrainList(sectionName: 'Workout' | 'Exercises') {
  let template = '';
  const trainingList =
    sectionName === 'Workout'
      ? WorkoutList
      : ((await exerciseRequest()) as trainObj[]);
  for (let i = 0; i < trainingList.length; i++) {
    if (sectionName === 'Workout') {
      if (i === 0) {
        template += linksToNewWorckoutTemplate;
      }
      template += createCellTemplate(trainingList, i, sectionName);
    } else {
      template += createCellTemplate(trainingList, i, sectionName);
    }
  }
  return template;
}

async function exerciseRequest() {
  try {
    const data = await fetch(`${url}exercisesList`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const dataObj = (await data.json()) as trainObj[];
    return dataObj;
  } catch (error) {
    console.error(error);
  }
}
