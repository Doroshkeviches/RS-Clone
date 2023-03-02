import backImg from '../../../Assets/back.jpg';
import deltoidImg from '../../../Assets/deltoid.jpg';
import bicepsImg from '../../../Assets/biceps.jpg';
import pectoralisImg from '../../../Assets/pectoralis.jpg';
import tricepsImg from '../../../Assets/triceps.jpg';
import abdominalImg from '../../../Assets/abdominal.jpg';
import userImg from '../../../Assets/UserImg.jpg';
import { objWorkout } from './interface';
import { url } from '../../../constants';

export const WorkoutList: objWorkout[] = [
  {
    img: backImg,
    name: 'trapezius',
  },
  {
    img: deltoidImg,
    name: 'deltoid',
  },
  {
    img: pectoralisImg,
    name: 'pectoralis major',
  },
  {
    img: bicepsImg,
    name: 'biceps',
  },
  {
    img: tricepsImg,
    name: 'triceps',
  },
  {
    img: abdominalImg,
    name: 'abdominal',
  },
];

export async function createWorkoutArray() {
  try {
    const username = localStorage.getItem('username');
    const response = await fetch(`${url}userWorkout/?name=${username}`);
    const UserWorkoutList = (await response.json()) as objWorkout[];
    UserWorkoutList.forEach((workout) => {
      if (!workout.img) {
        workout.img = userImg;
      }
    });
    return WorkoutList.concat(UserWorkoutList);
  } catch (error) {
    console.error(error);
    return WorkoutList;
  }
}
