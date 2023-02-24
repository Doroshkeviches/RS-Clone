import { objWorkout } from './interface';
import userImg from '../../../Assets/userImg.jpg';
import { url } from '../../../constants';
import { createCellTemplate } from './Workout.templates';

export function createNewWorkout() {
  const popupWraper = document.querySelector(
    '.popup-workout__Wraper'
  ) as HTMLElement;
  popupWraper.addEventListener('click', (e) => {
    if (e.target === popupWraper) {
      popupWraper.style.display = 'none';
    }
  });
  const submitBtn = document.querySelector(
    '.popup-workout__btn'
  ) as HTMLButtonElement;
  submitBtn.addEventListener('click', async () => {
    const workoutName = document.querySelector(
      '.popup-workout__input'
    ) as HTMLInputElement;
    const error = document.querySelector('.popup-error') as HTMLElement;
    if (!workoutName.value) {
      error.textContent = 'Workout should have a name';
      return;
    }
    const username = localStorage.getItem('username');
    const response = await fetch(`${url}userWorkout/?name=${username}`);
    const userWorkout = (await response.json()) as objWorkout[];
    userWorkout.forEach((workout) => {
      if (workout.name === workoutName.value) {
        error.textContent = 'Workout exists';
        return;
      }
    });
    const objWorkout: objWorkout = {
      name: workoutName.value,
      img: userImg,
      exercises: [],
    };
    userWorkout.push(objWorkout);
    workoutName.value = '';
    error.textContent = '';
    popupWraper.style.display = 'none';
    addUserWorkout(objWorkout);
    saveUserWorkout(userWorkout);
  });
}

export async function saveUserWorkout(obj: objWorkout[]) {
  const username = localStorage.getItem('username');
  try {
    await fetch(`${url}createMyWorkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        workout: obj,
      }),
    });
  } catch (error) {
    console.error(error);
  }
}

export function addUserWorkout(workout: objWorkout) {
  const workoutList = document.querySelector(
    '.menu-workout__list'
  ) as HTMLElement;
  const div = document.createElement('div');
  div.innerHTML = addDeleteBtn(
    createCellTemplate(workout, 'Workout/userWorkout')
  );
  const delBtn = div.querySelector(
    '.menu-workout__delete--btn'
  ) as HTMLButtonElement;
  delBtn.addEventListener('click', async () => {
    await deleteUserWorkout(delBtn.previousElementSibling as HTMLElement);
  });
  workoutList.append(div.firstElementChild as HTMLElement);
}

export function addDeleteBtn(cell: string) {
  const div = document.createElement('div') as HTMLElement;
  div.innerHTML = cell;
  const wraper = div.querySelector('.menu-workout__info') as HTMLElement;
  const deletBtn = document.createElement('button');
  deletBtn.classList.add('menu-workout__delete--btn');
  wraper.append(deletBtn);
  return div.innerHTML;
}

export async function deleteUserWorkout(deletCell: HTMLElement) {
  const username = localStorage.getItem('username');
  const workoutList = document.querySelector(
    '.menu-workout__list'
  ) as HTMLElement;
  workoutList.removeChild(
    ((deletCell.parentElement as HTMLElement).parentElement as HTMLElement)
      .parentElement as HTMLElement
  );
  const response = await fetch(`${url}userWorkout/?name=${username}`);
  const userWorkout = (await response.json()) as objWorkout[];
  const afterDelWorkout = userWorkout.filter((el) => {
    if (el.name !== (deletCell.textContent as string).trim()) return el;
  });
  saveUserWorkout(afterDelWorkout);
}
