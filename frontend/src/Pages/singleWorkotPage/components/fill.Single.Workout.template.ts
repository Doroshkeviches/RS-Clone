import { url } from '../../../constants';

export async function fillSingleWorkout() {
  const workoutInfo = await WorkoutRequest();
  console.log(workoutInfo);
}

async function WorkoutRequest() {
  const workoutName = window.location.hash.slice(1).split('/')[1];
  try {
    const response = await fetch(`${url}/workout/${workoutName}`);
    const workoutInfo = await response.json();
    return workoutInfo;
  } catch (error) {
    console.error(error);
  }
}
