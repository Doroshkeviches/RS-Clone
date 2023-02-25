import { Loader } from '../../helpers';
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

  Loader.hideLoader();
  if (wrapper) {
    wrapper.style.display = 'block';
  }
}
