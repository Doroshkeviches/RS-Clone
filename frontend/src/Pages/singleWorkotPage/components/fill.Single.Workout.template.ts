import {
  FIRST_EXERCISE,
  SECOND_TO_MILISECOND,
  TIME_DIVIDER,
  TWO_DIGIT_NUM,
  url,
} from '../../../constants';
import { createExerciseList } from '../functional/ExerciseList';
import { workoutObj } from '../functional/interface';
import { switchExerciseItem } from '../functional/switchActiveExercise';
import { createTimer } from '../functional/timer';
import {
  createErrorWraper,
  createExerciseItem,
} from './single.Workout.template';
const TIMER_COUNTER_USED = 1;
const TIME_OVER = '00:00:00';

export async function fillSingleWorkout() {
  const preLoader = document.querySelector(
    '.pre-loader__Wraper'
  ) as HTMLElement;
  const workoutWraper = document.querySelector('.workout') as HTMLElement;
  workoutWraper.style.display = 'none';
  preLoader.style.display = 'flex';
  const workoutInfo = (await WorkoutRequest()) as workoutObj[];
  const congratulation = document.querySelector(
    '.congratulation__wraper'
  ) as HTMLElement;
  if (!workoutInfo) {
    window.location.hash = '404';
  }
  preLoader.style.display = 'none';
  workoutWraper.style.display = 'flex';
  const exerciseListWraper = document.querySelector(
    '.exercise__list'
  ) as HTMLElement;
  const timerPanel = document.querySelector('.timer__time') as HTMLElement;
  const startTimerBtn = document.querySelector(
    '.timer__start'
  ) as HTMLButtonElement;
  const pauseTimerBtn = document.querySelector(
    '.timer__pause'
  ) as HTMLButtonElement;
  const stopTimerBtn = document.querySelector(
    '.timer__stop'
  ) as HTMLButtonElement;

  let timer: NodeJS.Timer;
  let TIMER_COUNTER = 0;
  if (workoutInfo.length === 0) {
    createErrorWraper();
  } else {
    const exerciseList = createExerciseList(workoutInfo);
    exerciseList.forEach((el) => {
      const exersice = createExerciseItem(el.name, el.time);
      exerciseListWraper.innerHTML += exersice;
    });
    timerPanel.textContent = countAlltime();
    congratulation.addEventListener('click', () => {
      congratulation.style.display = 'none';
    });
    startTimerBtn.addEventListener('click', () => {
      if (TIMER_COUNTER !== TIMER_COUNTER_USED) {
        timer = setInterval(() => {
          createTimer(exerciseList);
          const time = (document.querySelector('.timer__time') as HTMLElement)
            .textContent as string;
          if (time === TIME_OVER) {
            congratulation.style.display = 'flex';
            clearInterval(timer);
          }
        }, SECOND_TO_MILISECOND);
        TIMER_COUNTER++;
      }
    });
    pauseTimerBtn.addEventListener('click', () => {
      if (TIMER_COUNTER === TIMER_COUNTER_USED) {
        TIMER_COUNTER--;
      }
      clearInterval(timer);
    });
    stopTimerBtn.addEventListener('click', () => {
      if (TIMER_COUNTER === TIMER_COUNTER_USED) {
        TIMER_COUNTER--;
      }
      timerPanel.textContent = countAlltime();
      clearInterval(timer);
      exerciseListWraper.innerHTML = '';
      exerciseList.forEach((el) => {
        const exersice = createExerciseItem(el.name, el.time);
        exerciseListWraper.innerHTML += exersice;
      });
      switchExerciseItem(exerciseList, FIRST_EXERCISE);
      timerPanel.textContent = countAlltime();
    });
    switchExerciseItem(exerciseList, FIRST_EXERCISE);
  }
  window.addEventListener('hashchange', () => {
    clearInterval(timer);
  });
}

async function WorkoutRequest() {
  const workoutName = window.location.hash.slice(1).split('/')[1];
  try {
    let response: Response;
    if (workoutName === 'userWorkout') {
      const username = localStorage.getItem('username');
      const workoutId = window.location.hash.slice(1).split('/')[2];
      response = await fetch(
        `${url}userExercise?name=${username}&workout=${workoutId}`
      );
    } else {
      response = await fetch(`${url}/workout/${workoutName}`);
    }
    const workoutInfo = (await response.json()) as workoutObj[];
    return workoutInfo;
  } catch (error) {
    console.error(error);
  }
}

function countAlltime() {
  const exercisesTime = document.querySelectorAll(
    '.exercise__item_timer'
  ) as NodeListOf<HTMLElement>;
  let minutes = 0;
  let hour = 0;
  let second = 0;
  exercisesTime.forEach((value) => {
    const allTimeArray = (value.textContent as string).split(':');
    second +=
      (+allTimeArray[0] * TIME_DIVIDER + +allTimeArray[1]) * TIME_DIVIDER +
      +allTimeArray[2];
  });
  while (second >= TIME_DIVIDER) {
    minutes++;
    second = second - TIME_DIVIDER;
  }
  while (minutes >= TIME_DIVIDER) {
    hour++;
    minutes = minutes - TIME_DIVIDER;
  }
  return `${hour >= TWO_DIGIT_NUM ? hour : `0${hour}`}:${
    minutes >= TWO_DIGIT_NUM ? minutes : `0${minutes}`
  }:${second >= TWO_DIGIT_NUM ? second : `0${second}`}`;
}
