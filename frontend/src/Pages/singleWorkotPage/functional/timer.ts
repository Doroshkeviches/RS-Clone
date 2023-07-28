import { workoutObj } from './interface';
import { switchExerciseItem } from './switchActiveExercise';
import {
  FULL_PRECENT,
  SECOND_TO_MILISECOND,
  TIME_DIVIDER,
  TWO_DIGIT_NUM,
} from '../../../constants';

export function createTimer(exerciseList: workoutObj[]) {
  const timerPanel = document.querySelector('.timer__time') as HTMLElement;
  creteExerciseTimer(exerciseList);
  const timeArray = (timerPanel.textContent as string).split(':');
  let timeToSecond =
    (+timeArray[0] * TIME_DIVIDER + +timeArray[1]) * TIME_DIVIDER +
    +timeArray[2];
  timeToSecond -= 1;
  const hour = new Date(timeToSecond * SECOND_TO_MILISECOND).getUTCHours();
  const minutes = new Date(timeToSecond * SECOND_TO_MILISECOND).getMinutes();
  const second = new Date(timeToSecond * SECOND_TO_MILISECOND).getSeconds();
  timerPanel.textContent = `${hour >= TWO_DIGIT_NUM ? hour : '0' + hour}:${
    minutes >= TWO_DIGIT_NUM ? minutes : '0' + minutes
  }:${second >= TWO_DIGIT_NUM ? second : '0' + second}`;
}

function creteExerciseTimer(exerciseList: workoutObj[]) {
  const exerciseActiveNum = countTimerLineActive();
  const exerciseTimer = document.querySelectorAll(
    '.exercise__item_timer'
  ) as NodeListOf<HTMLElement>;
  const timerLine = document.querySelectorAll('.timer__line-filling')[
    exerciseActiveNum
  ] as HTMLElement;
  const timeArray = (
    exerciseTimer[exerciseActiveNum].textContent as string
  ).split(':');
  const activeTimeArray = exerciseList[exerciseActiveNum].time.split(':');
  const activeTimeToSecond =
    (+activeTimeArray[0] * TIME_DIVIDER + +activeTimeArray[1]) * TIME_DIVIDER +
    +activeTimeArray[2];
  let timeToSecond =
    (+timeArray[0] * TIME_DIVIDER + +timeArray[1]) * TIME_DIVIDER +
    +timeArray[2];
  timeToSecond -= 1;
  if (timeToSecond >= 0) {
    const hour = new Date(timeToSecond * SECOND_TO_MILISECOND).getUTCHours();
    const minutes = new Date(timeToSecond * SECOND_TO_MILISECOND).getMinutes();
    const second = new Date(timeToSecond * SECOND_TO_MILISECOND).getSeconds();
    exerciseTimer[exerciseActiveNum].textContent = `${
      hour >= TWO_DIGIT_NUM ? hour : '0' + hour
    }:${minutes >= TWO_DIGIT_NUM ? minutes : '0' + minutes}:${
      second >= TWO_DIGIT_NUM ? second : '0' + second
    }`;
    timerLine.style.width = `${
      FULL_PRECENT -
      Math.round((timeToSecond * FULL_PRECENT) / activeTimeToSecond)
    }%`;
    if (timeToSecond === 0) {
      switchExerciseItem(exerciseList, exerciseActiveNum + 1);
    }
  }
}

function countTimerLineActive() {
  const timerLines = document.querySelectorAll(
    '.timer__line'
  ) as NodeListOf<HTMLElement>;
  let counter = 0;
  timerLines.forEach((el) => {
    if (el.style.display === 'block') {
      counter++;
    }
  });
  return counter - 1;
}
