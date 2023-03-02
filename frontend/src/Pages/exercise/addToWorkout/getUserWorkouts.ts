import { url } from '../../../constants';
import { userWorkout } from '../userWorkoutInterface';

export default async function (): Promise<userWorkout[] | []> {
  const username = localStorage.getItem('username') || '';
  const response = await fetch(`${url}userWorkout/?name=${username}`);
  if (response.status !== 200) {
    return [];
  }
  const resData: userWorkout[] | [] = (await response.json()) || [];

  return resData;
}
