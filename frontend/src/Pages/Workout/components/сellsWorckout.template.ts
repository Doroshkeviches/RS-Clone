import { component } from '../../header/header.template';
import WorkoutImg from '../../../Assets/image3.png';

export const linksToNewWorckoutTemplate: component = {
  template: `
  <li class="menu-workout__item">
    <a href="#CreateNewWorckout" class="menu-workout__item_link link-to-CreateWorckout">
      <div class="plus"></div>
    </a>
</li>`,
};

export const cellWorckoutTemplate: component = {
  //TODO Create funck CreateCellWorckout
  template: `
  <li class="menu-workout__item">
  <a href="#Training" class="menu-workout__item_link">
    <img width="280px" height="162px" src="${WorkoutImg}" alt="workoutImg" class="workout__item-img">
    <h2 class="menu-workout-title">
      hard chest
    </h2>
    </a>
  </li>`,
};
