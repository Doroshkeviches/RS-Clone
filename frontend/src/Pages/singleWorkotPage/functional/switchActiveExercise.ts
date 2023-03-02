import { createWorkoutLinkTemplate } from '../components/single.Workout.template';
import { workoutObj } from './interface';

export function switchExerciseItem(
  workoutInfo: workoutObj[],
  activeExerciseNum: number
) {
  const workoutLink = document.querySelector(
    '.workout-link__wraper'
  ) as HTMLElement;
  const exerciseItems = document.querySelectorAll(
    '.exercise__item'
  ) as NodeListOf<HTMLElement>;
  workoutLink.innerHTML = createWorkoutLinkTemplate(
    workoutInfo[activeExerciseNum]
  );
  (
    exerciseItems[activeExerciseNum].querySelector(
      '.timer__line'
    ) as HTMLElement
  ).style.display = 'block';
}
