import { trainObj } from './interface';

export const linksToNewWorckoutTemplate = `
  <li class="menu-workout__item">
    <a href="#CreateNewWorckout" class="menu-workout__item_link link-to-CreateWorckout">
      <div class="plus"></div>
    </a>
  </li>`;

export function createCellTemplate(list: trainObj[], counter: number) {
  //TODO switch param to ResultOnFetch.param
  return `
  <li class="menu-workout__item">
    <a href="#Workout/${list[counter].name}" class="menu-workout__item_link">
      <img width="280px" height="162px" src="${list[counter].img}" alt="workoutImg" class="workout__item-img">
      <h2 class="menu-workout-title">
        ${list[counter].name}
      </h2>
    </a>
  </li>`;
}
