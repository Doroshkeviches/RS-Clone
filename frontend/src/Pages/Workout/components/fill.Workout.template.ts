import {
  createCellTemplate,
  linksToNewWorckoutTemplate,
} from './Workout.templates';
import { createWorkoutArray } from './workout.array';
import { objWorkout } from './interface';
import { url } from '../../../constants';
import { Loader } from '../../../helpers';
import {
  addDeleteBtn,
  createNewWorkout,
  deleteUserWorkout,
} from './create.new.workout';

export async function fillWorckoutTemplate(
  sectionName: 'Workout' | 'Exercises'
) {
  Loader.showLoader();
  const main = document.querySelector('.menu-workout__list') as HTMLElement;
  const btn = document.querySelector(`.${sectionName}`) as HTMLElement;
  btn.classList.add('active__worckout-btn');
  const trainingList = await createWorkoutList(sectionName);
  Loader.hideLoader();
  main.innerHTML = trainingList;
  if (sectionName === 'Workout') {
    const createNewWorkoutBtn = document.querySelector(
      '.link-to-CreateWorckout'
    ) as HTMLElement;
    createNewWorkoutBtn.addEventListener('click', () => {
      const popupWraper = document.querySelector(
        '.popup-workout__Wraper'
      ) as HTMLElement;
      popupWraper.style.display = 'block';
    });
    createNewWorkout();
  }
  const deleteUserWorkoutBtn = document.querySelectorAll(
    '.menu-workout__delete--btn'
  ) as NodeListOf<HTMLButtonElement>;
  deleteUserWorkoutBtn.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      await deleteUserWorkout(btn.previousElementSibling as HTMLElement);
    });
  });
}

export async function createWorkoutList(sectionName: 'Workout' | 'Exercises') {
  let template = '';
  const trainingList =
    sectionName === 'Workout'
      ? ((await createWorkoutArray()) as objWorkout[])
      : ((await exerciseRequest()) as objWorkout[]);
  for (let i = 0; i < trainingList.length; i++) {
    if (sectionName === 'Workout') {
      if (i === 0) {
        template += linksToNewWorckoutTemplate;
      }
      if (trainingList[i].exercises !== undefined) {
        const cell = addDeleteBtn(
          createCellTemplate(trainingList[i], `${sectionName}/userWorkout`)
        );
        template += cell;
      } else {
        template += createCellTemplate(trainingList[i], sectionName);
      }
    } else {
      template += createCellTemplate(trainingList[i], sectionName);
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
    const dataObj = (await data.json()) as objWorkout[];
    return dataObj;
  } catch (error) {
    console.error(error);
  }
}
