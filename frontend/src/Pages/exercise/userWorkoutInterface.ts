import { exerciseRespnose } from './serverResponseInterface';

export interface userWorkout {
  name: string;
  img: string;
  exercises: exerciseRespnose[];
}
