import { trainObj } from './interface';
import i18n from 'i18next';

export const WorkoutTemplate = `
  <div class="pre-loader__Wraper">
    <div class="loadingio-spinner-rolling-36lkopxd38s"><div class="ldio-877o781s6so"><div></div></div></div>
  </div>
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
    <a href="#CreateNewWorckout" class="menu-workout__item_link link-to-CreateWorckout">
      <div class="plus"></div>
    </a>
  </li>`;

export function createCellTemplate(
  list: trainObj[],
  counter: number,
  sectionName: 'Workout' | 'Exercises'
) {
  return `
  <li class="menu-workout__item">
    <a href="#${sectionName}/${list[counter].name}" class="menu-workout__item_link">
      <img src="${list[counter].img}" alt="workoutImg" class="workout__item-img">
      <h2 class="menu-workout-title">
        ${list[counter].name}
      </h2>
    </a>
  </li>`;
}
