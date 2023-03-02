export class Loader {
  static getLoader() {
    return document.getElementsByClassName(
      'pre-loader__Wraper'
    )[0] as HTMLElement;
  }

  static showLoader() {
    const loader = Loader.getLoader();

    if (loader) {
      loader.style.display = 'flex';
    }
  }

  static hideLoader() {
    const loader = Loader.getLoader();

    if (loader) {
      loader.style.display = 'none';
    }
  }
}
