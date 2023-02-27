export default async function () {
  const popUp = document.getElementsByClassName(
    'popup-workout__Wraper'
  )[0] as HTMLElement;
  if (!popUp) {
    return;
  }

  popUp.style.display = 'block';
}
