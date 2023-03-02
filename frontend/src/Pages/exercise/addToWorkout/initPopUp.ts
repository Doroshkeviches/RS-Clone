import { exerciseRespnose } from '../serverResponseInterface';
import buttonSaveCLicked from './buttonSaveCLicked';
import getUserWorkouts from './getUserWorkouts';

export default async function (data: exerciseRespnose) {
  const popupWraper = document.getElementsByClassName(
    'popup-workout__Wraper'
  )[0] as HTMLElement;
  popupWraper?.addEventListener('click', (e) => {
    if (e.target === popupWraper) {
      popupWraper.style.display = 'none';
    }
  });

  const workoutList = document.getElementsByClassName(
    'popup-workout__workout-list'
  )[0] as HTMLElement;
  console.warn(data);

  const userWorkouts = await getUserWorkouts();

  const btnUpdateWorkouts = document.getElementsByClassName(
    'popup-workout__btn'
  )[0] as HTMLButtonElement;
  btnUpdateWorkouts?.addEventListener('click', () =>
    buttonSaveCLicked(data, userWorkouts)
  );

  workoutList.replaceChildren(
    ...userWorkouts.map((workout) => {
      const wrapper = document.createElement('div');
      wrapper.classList.add('workout-list__item');

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.name = workout.name;
      input.classList.add('workout-list__checkbox');

      const name = document.createElement('p');
      name.innerText = workout.name;

      wrapper.append(input, name);
      return wrapper;
    })
  );
}
