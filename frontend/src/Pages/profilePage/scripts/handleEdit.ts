import { changeInputsDisables } from './changeInputsDisables';
export function handleEdit() {
  const edit = document.getElementById('profileChangeBtn') as HTMLElement;
  edit.addEventListener('click', changeInputsDisables);
}
