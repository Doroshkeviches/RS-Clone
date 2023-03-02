import { disabledInputSaveBtn } from './disabledInputSaveBtn';
export function handleSave() {
  const save = document.getElementById('profileBtnSave');
  save?.addEventListener('click', disabledInputSaveBtn);
}
