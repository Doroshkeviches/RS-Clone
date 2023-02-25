import { objWorkout } from './interface';
import i18n from 'i18next';

const WorkoutPopupTemplate = `
  <div class="popup-workout__Wraper">
    <div class="popup-workout">
      <h4 class="popup-workout__title">${i18n.t('workout.createWorkout')}</h4>
      <input type="text" class="popup-workout__input" placeholder="New Workout name" required>
      <span class="popup-error"></span>
      <div class="popup-workout__summit-wraper">
        <button class="popup-workout__btn btn">${i18n.t(
          'workout.submit'
        )}</button>
      </div>
    </div>
  </div>
`;

export const WorkoutTemplate = `
  ${WorkoutPopupTemplate}
  <div class="container">
    <nav class="main__menu-nagigation">
      <a href="#Workout" class="main__manu-navigation--btn Workout">${i18n.t(
        'header.workout'
      )}</a>
      <a href="#Exercises" class="main__manu-navigation--btn Exercises">${i18n.t(
        'workout.exercises'
      )}</a>
    </nav>
    <div class="main__menu-workout">
      <ul class="menu-workout__list">
      </ul>
    </div>
  </div>`;

export const linksToNewWorckoutTemplate = `
  <li class="menu-workout__item">
    <div class="menu-workout__item_link link-to-CreateWorckout">
      <div class="plus"></div>
    </div>
  </li>`;

export function createCellTemplate(workout: objWorkout, sectionName: string) {
  return `
  <li class="menu-workout__item">
    <a href="#${sectionName}/${workout.name}" class="menu-workout__item_link">
      <img src="${workout.img}" alt="workoutImg" class="workout__item-img">
      <div class="menu-workout__info">
        <h2 class="menu-workout-title">
          ${workout.name}
        </h2>
      </div>
    </a>
  </li>`;
}
