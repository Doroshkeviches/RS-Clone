import { loadImage } from './loadImage';
export function handleApply() {
  const apply = document.getElementById('apply') as HTMLElement;
  apply.addEventListener('click', loadImage);
}
