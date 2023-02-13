// This should be called first, to inititalize i18n,
// but we don't actually need anything from the file
// Please tell me if there is a better way :)
require('./i18n/i18n');

import './index.sass';
import './Routes/index.rout';
import './Pages/index';

import { renderRegistrationPage } from './Pages/registrationPage/scripts/registration/renderRegistrationPage';

setTimeout(() => {
  const a = document.createElement('div');
  a.id = 'registrationContainer';
  document.getElementsByClassName('root')[0].replaceChildren(a);

  renderRegistrationPage();
}, 5000);
