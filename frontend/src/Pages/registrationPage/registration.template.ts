import i18n from 'i18next';

export const autorizationTemplate = `
  <div id="container">
    <div class="registrationContainer" id="registrationContainer">
      <div id="sign">
          <div id="signIn">${i18n.t('signIn.title')}</div>
          <div id="signUpHeader">${i18n.t('signUp.title')}</div>
      </div>
      <div id="message"></div>
      <input type="text" value="" id="username" placeholder=${i18n.t(
        'common.user'
      )} required>
      <input type="text" id="password" placeholder=${i18n.t(
        'common.password'
      )} required>
      <button class="submit" id="submit">${i18n.t('signIn.title')}</button>
    </div>
  </div>`;
