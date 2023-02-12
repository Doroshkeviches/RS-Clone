import i18next from 'i18next';
import locales from './locales/locales';

export function getCurrentLanguage(): string {
  return localStorage.getItem('language') || i18next.language || 'en';
}

export function changeLanguage(lng: string): void {
  i18next.changeLanguage(lng);
  localStorage.setItem('language', lng);
  location.reload();
}

i18next.init({
  lng: getCurrentLanguage(),
  fallbackLng: 'en',
  resources: {
    ...locales,
  },
});
