export function loadImage() {
  const img = document.getElementById('img') as HTMLImageElement;
  const file = document.getElementById('file') as HTMLInputElement;
  const imgSrc = (file.files as FileList)[0];
  if (!imgSrc) {
    return;
  }
  img.src = URL.createObjectURL(imgSrc);
}
