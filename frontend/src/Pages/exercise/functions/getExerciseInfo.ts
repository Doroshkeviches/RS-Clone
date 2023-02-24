import { url } from '../../../constants';
import { exerciseRespnose } from './../serverResponseInterface';

export default async function getExerciseInfo(
  exerciseName: string
): Promise<exerciseRespnose | object> {
  try {
    const responce = await fetch(`${url}exercises/${exerciseName}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data: exerciseRespnose | object = await responce.json();

    if (Object.keys(data).length === 0 || responce.status === 404) {
      window.location.hash = '404';
      return {};
    }

    return data;
  } catch (error) {
    window.location.hash = '404';
    return {};
  }
}
