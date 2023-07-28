window.addEventListener('load', switchLang);
import { changeLanguage, getCurrentLanguage } from '../../i18n/i18n';

export function switchLang() {
  const btnLang = document.querySelector(
    '.footer__switch-lang_wraper'
  ) as HTMLButtonElement;
  const langWraper = document.querySelectorAll(
    '.footer__switch-lang'
  ) as NodeListOf<HTMLElement>;
  const langActive = getCurrentLanguage();
  if (langActive === 'en') {
    langWraper[0].classList.remove('active-lang');
    langWraper[1].classList.add('active-lang');
  } else {
    langWraper[1].classList.remove('active-lang');
    langWraper[0].classList.add('active-lang');
  }
  btnLang.addEventListener('click', (e) => {
    const lang = (e.target as HTMLButtonElement).textContent as 'RU' | 'EN';
    changeLanguage(lang.toLowerCase().trim());
  });
}
