import { workoutObj } from './interface';

export function createExerciseList(workoutInfo: workoutObj[]) {
  const ExerciseList = [];
  for (let i = 0; i < workoutInfo.length; i++) {
    ExerciseList.push(workoutInfo[i]);
    const objRest: workoutObj = {
      name: 'Rest',
      Img: '',
      Musclse: ['All'],
      Type: 'Reset',
      description:
        'Proper rest between workouts is essential for maximizing the benefits of exercise and preventing injury. When you exercise, your muscles experience small tears, which need time to repair and strengthen. This process is known as muscle hypertrophy, and its what makes your muscles grow stronger. Taking time off between workouts allows your muscles to heal and recover, which is crucial for long-term progress. Without proper rest, you risk overtraining, which can lead to injury, fatigue, and a plateau in your performance. In summary, proper rest between workouts is crucial for maximizing the benefits of exercise and preventing injury. Aim for at least one full day of rest between each workout, engage in low-impact activities on your rest days, get enough sleep, and listen to your body to avoid overtraining.',
      equipment: 'nothing',
      YouTube: '2m5uyamZblw',
      time: '00:00:05',
    };
    ExerciseList.push(objRest);
  }
  return ExerciseList;
}
