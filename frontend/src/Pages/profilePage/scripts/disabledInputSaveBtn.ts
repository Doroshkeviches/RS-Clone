import { loadImage } from './loadImage';
import { updateProdileValues } from './updateProfileValues';
import { disableInputs } from './disableInputs';
export function disabledInputSaveBtn() {
  disableInputs();
  loadImage();
  updateProdileValues();
}
