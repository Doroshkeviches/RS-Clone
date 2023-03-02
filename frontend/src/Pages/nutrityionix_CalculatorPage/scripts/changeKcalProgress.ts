export function changeKcalProgress(kcal: number) {
  const progress = document.getElementById('progress') as HTMLElement;
  const totalKcal = 2500;
  let percentKcal = (kcal / totalKcal) * 100;
  if (percentKcal >= 100) {
    percentKcal = 100;
  }
  progress.style.width = `${percentKcal}%`;
}
