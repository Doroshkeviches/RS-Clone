import i18n from 'i18next';
import { handleSignUpBtn } from './signUpBtnClick';
export function renderRegistrationPage() {
  const container = document.getElementById(
    'registrationContainer'
  ) as HTMLElement;
  container.innerHTML = `
    <div class="signUp">${i18n.t('signUp.title')}</div>
    <input type="text" value="" id="name" placeholder="${i18n.t(
      'signUp.placeholder'
    )}">
    <div id="radioGender">
      <div class="radioGender_item">
        <input type="radio" name="gender" id="genderMale" value="Male" checked>
        <label for="genderMale">
          ${i18n.t('common.gender.male')}
        </label>
      </div>
      <div class="radioGender_item">
        <input type="radio" name="gender" id="genderFemale" value="Female">
        <label for="genderFemale">
          ${i18n.t('common.gender.female')}
        </label>
      </div>
    </div>
    <input type="number" value="" id="weight" placeholder="${i18n.t(
      'registration.placeholder.weight'
    )}">
    <input type="number" value="" id="height" placeholder="${i18n.t(
      'registration.placeholder.height'
    )}">
    <input type="number" value="" id="age" placeholder="20">
    <input type="number" value="" id="activity" placeholder="${i18n.t(
      'registration.placeholder.activity'
    )}">
    <button class="submit" id="signUpBtn">${i18n.t('signUp.title')}</button>
  `;
  handleSignUpBtn();
}
