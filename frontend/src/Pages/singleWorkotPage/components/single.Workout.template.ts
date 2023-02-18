import arrow from '../../../Assets/Arrow.svg';
import img from '../../../Assets/testImg.jpg';

export const singleWorkoutTemplate = `
  <div class="container">
      <div class="workout">
        <div class="workout__functional">
          <a href="#/Workout" class="functional__link">
            <img src="${arrow}" alt="arrow" class="link-img">
          </a>
          <ul class="exercise__list">
          </ul>
          <div class="timer__btn-list">
            <button class="timer__start timer__btn">Start</button>
            <button class="timer__pause timer__btn">Pause</button>
            <button class="timer__stop timer__btn">Stop</button>
          </div>
        </div>
        <div class="workout__info">
          <div class="workout-link__wraper">
          </div>
          <div class="timer__panel">
            <div class="timer__time">
              00:00:00
            </div>
            <div class="timer-cell">Left</div>
          </div>
        </div>
      </div>
    </div>`;

export const creteExerciseItem = `
  <li class="exercise__item">
    <div class="exercise__item-info">
      <h3 class="exercise__item-name"></h3>
      <div class="exercise__item_timer">00:05:00</div>
    </div>
    <div class="timer__line">
      <div class="timer__line-filling"></div>
    </div>
  </li>`;

export const workoutLinkTemplate = `
  <a href="#Exercise/{Exercise[counter].name}" class="menu-workout__item_link single-workout__item_link">
    <img src="${img}" alt="workoutImg" class="workout__item-img single-workout__item-img">
    <h2 class="menu-workout-title single-workout--title">
      {Exercise[counter].name}
    </h2>
    <p class="workout-description">
      {Exercise[counter].description}
    </p>
  </a>`;
