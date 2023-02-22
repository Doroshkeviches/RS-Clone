export function switchHeaderActive(url: string) {
  const headerLinks = document.querySelectorAll(
    '.header__menu-link'
  ) as NodeListOf<HTMLElement>;
  headerLinks.forEach((el) => {
    if (
      el.textContent === url ||
      el.textContent === url.substring(0, url.length - 1)
    ) {
      el.classList.add('active-link');
    } else {
      el.classList.remove('active-link');
    }
  });
}
