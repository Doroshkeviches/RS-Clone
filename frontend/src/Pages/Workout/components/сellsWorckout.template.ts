import WorkoutImg from '../../../Assets/image3.png';

export const linksToNewWorckoutTemplate = `
  <li class="menu-workout__item">
    <a href="#CreateNewWorckout" class="menu-workout__item_link link-to-CreateWorckout">
      <div class="plus"></div>
    </a>
  </li>`;

export function createCellTemplate(/*ResultOnFeth*/) {
  //TODO switch param to ResultOnFetch.param
  return `
  <li class="menu-workout__item">
    <a href="#Training" class="menu-workout__item_link">
      <img width="280px" height="162px" src="${WorkoutImg}" alt="workoutImg" class="workout__item-img">
      <h2 class="menu-workout-title">
        hard chest
      </h2>
    </a>
  </li>`;
}
