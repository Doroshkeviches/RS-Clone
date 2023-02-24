import i18n from 'i18next';
import loaderTemplate from '../Loader/loaderTemplate';

export const exerciseTemplate = `
  ${loaderTemplate}
  <div class="exercise container">
    <div class="exercise__top">
      <iframe class="exercise__video" src=https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&modestbranding=1>
      </iframe>
      <div class="exercise__info-wrapper">
        <div class="exercise__info">
          <h2 class="exercise__title">
          </h2>
          <div class="exercise__info-list">
          </div>
        </div>
        <button class="exercise__btn-add-to-training btn">${i18n.t(
          'exercise.btnAddToWorkout'
        )}</button>
      </div>
    </div>
    <div class="exercise__bottom">
      <p class="exercise__description">
      </p>
    </div>
  </div>
`;
