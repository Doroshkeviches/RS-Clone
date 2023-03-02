export const router = {
  getUrl() {
    const url = window.location.hash.slice(1);
    const startUrl = url.split('/')[0];
    return url.split('/')[1] ? startUrl + '/' : startUrl;
  },
};
