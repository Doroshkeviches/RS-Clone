import {
  createCellTemplate,
  linksToNewWorckoutTemplate,
} from './Worckout.templates';
import { WorkoutList } from './trainMass';
import { trainObj } from './interface';
import { url } from '../../../constants';

export async function fillWorckoutTemplate(
  sectionName: 'Workout' | 'Exercises'
) {
  const main = document.querySelector('.menu-workout__list') as HTMLElement;
  const btn = document.querySelector(`.${sectionName}`) as HTMLElement;
  btn.classList.add('active__worckout-btn');
  const trainList = await createTrainList(sectionName);
  main.innerHTML = trainList;
}

export async function createTrainList(sectionName: 'Workout' | 'Exercises') {
  let template = '';
  const trainList =
    sectionName === 'Workout'
      ? WorkoutList
      : ((await exerciseRequest()) as trainObj[]);
  for (let i = 0; i < trainList.length; i++) {
    if (sectionName === 'Workout') {
      if (i === 0) {
        template += linksToNewWorckoutTemplate;
      }
      template += createCellTemplate(trainList, i, sectionName);
    } else {
      template += createCellTemplate(trainList, i, sectionName);
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
