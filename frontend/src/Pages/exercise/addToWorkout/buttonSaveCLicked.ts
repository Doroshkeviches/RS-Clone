import { url } from '../../../constants';
import { exerciseRespnose } from '../serverResponseInterface';
import { userWorkout } from '../userWorkoutInterface';

export default function (
  exercise: exerciseRespnose,
  userWorkouts: userWorkout[] | []
) {
  const checkboxes = Array.from(
    document.getElementsByClassName('workout-list__checkbox')
  ) as HTMLInputElement[];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      for (const workout of userWorkouts) {
        if (workout.name === checkbox.name) {
          workout.exercises.push(exercise);
        }
      }
    }
  });

  const username = localStorage.getItem('username');

  fetch(`${url}createMyWorkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      workout: userWorkouts,
    }),
  });

  const popUp = document.getElementsByClassName(
    'popup-workout__Wraper'
  )[0] as HTMLElement;
  if (!popUp) {
    return;
  }

  popUp.style.display = 'none';
}
