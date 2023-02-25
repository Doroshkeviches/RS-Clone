import { workoutObj } from '../functional/interface';
import i18n from 'i18next';
import loaderTemplate from '../../Loader/loaderTemplate';

export const singleWorkoutTemplate = `
  ${loaderTemplate}
  <div class="congratulation__wraper">
    <h4 class="congratulation__title">${i18n.t('workout.congratulation')}</h4>
  </div>
  <div class="container">
      <div class="workout">
        <div class="workout__functional">
          <ul class="exercise__list">
          </ul>
          <div class="timer__btn-list">
            <button class="timer__start timer__btn btn">${i18n.t(
              'workout.start'
            )}</button>
            <button class="timer__pause timer__btn btn">${i18n.t(
              'workout.pause'
            )}</button>
            <button class="timer__stop timer__btn btn">${i18n.t(
              'workout.reset'
            )}</button>
          </div>
        </div>
        <div class="workout__info">
          <div class="workout-link__wraper">
          </div>
          <div class="timer__panel">
            <div class="timer__time">
              00:00:00
            </div>
            <div class="timer-cell">Time Left</div>
          </div>
        </div>
      </div>
    </div>`;

export function createExerciseItem(name: string, time: string) {
  return `
  <li class="exercise__item">
    <div class="exercise__item-info">
      <h3 class="exercise__item-name">${name}</h3>
      <div class="exercise__item_timer">${time}</div>
    </div>
    <div class="timer__line">
      <div class="timer__line-filling"></div>
    </div>
  </li>`;
}

export function createWorkoutLinkTemplate(workout: workoutObj) {
  return `
  <a href="#Exercise/{Exercise[counter].name}" class="menu-workout__item_link single-workout__item_link">
    <iframe src="http://www.youtube.com/embed/${
      workout.YouTube
    }" frameborder="0" class="single-workout__item-video"></iframe>
    <h2 class="menu-workout-title single-workout--title">
      ${workout.name}
    </h2>
    <p class="workout-description">
      ${
        workout.Musclse
          ? `<b>${i18n.t('workout.muscle')}</b>: ${workout.Musclse}<br><br>`
          : ''
      }
      ${
        workout.equipment
          ? `<b>${i18n.t('workout.equiment')}</b>: ${workout.equipment}<br><br>`
          : ''
      }
      ${
        workout.description
          ? `<b>${i18n.t('workout.description')}</b>: ${
              workout.description
            }<br><br>`
          : ''
      }
      ${
        workout.Type
          ? `<b>${i18n.t('workout.type')}</b>: ${workout.Type}<br><br>`
          : ''
      }
    </p>
  </a>`;
}

export function createErrorWraper() {
  const exerciseList = document.querySelector('.exercise__list') as HTMLElement;
  const timerPanel = document.querySelector('.timer__panel') as HTMLElement;
  const noExerciseItem = `
  <li class="no-exercise__wrap">
    <h3 class="no-exercise__title">
      ${i18n.t('workout.noWorkout')}
    </h3>
    <a href="#Exercises" class="no-exercise__link btn">
      ${i18n.t('workout.toExercise')}
    </a>
  </li>`;
  exerciseList.innerHTML = noExerciseItem;
  exerciseList.style.overflowY = 'visible';
  timerPanel.style.display = 'none';
}
