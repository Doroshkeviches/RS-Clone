import { Loader } from '../../helpers';
import initPopUp from './addToWorkout/initPopUp';
import showPopUp from './addToWorkout/showPopUp';
import fillExerciseFields from './functions/fillExerciseFields';
import getExerciseInfo from './functions/getExerciseInfo';
import { exerciseRespnose } from './serverResponseInterface';

export default async function (): Promise<void> {
  Loader.showLoader();
  const wrapper = document.getElementsByClassName('exercise')[0] as HTMLElement;
  if (wrapper) {
    wrapper.style.display = 'none';
  }

  const exercise = window.location.hash.split('/').pop() || '';
  const data = await getExerciseInfo(exercise);

  if (Object.keys(data).length === 0) {
    return;
  }

  fillExerciseFields(data as exerciseRespnose);

  initPopUp(data as exerciseRespnose);

  const btnAddToWorkout = document.getElementsByClassName(
    'exercise__btn-add-to-training'
  )[0] as HTMLButtonElement;
  btnAddToWorkout?.addEventListener('click', () => showPopUp());

  Loader.hideLoader();
  if (wrapper) {
    wrapper.style.display = 'block';
  }
}
