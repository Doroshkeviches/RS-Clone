import i18n from 'i18next';

export const addToWorkoutPopupTemplate = `
  <div class="popup-workout__Wraper">
    <div class="popup-workout">
      <div class="popup-workout__workout-list">
      </div>
      <div class="popup-workout__summit-wraper">
        <button class="popup-workout__btn btn">${i18n.t('common.save')}</button>
      </div>
    </div>
  </div>
`;
