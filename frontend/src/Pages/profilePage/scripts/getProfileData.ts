import { renderProfileContainer } from './renderProfileContainer';
import { handleApply } from './handleApply';
import { url } from '../../../constants';
export function getProfileData(username: string) {
  fetch(`${url}searchUser/?name=${username}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      const name = data.name;
      const gender = data.gender;
      const weight: number = +data.weight;
      const height: number = +data.height;
      const age: number = +data.age;
      const activity: number = +data.activity;
      renderProfileContainer(name, gender, weight, height, age, activity);
      handleApply();
    });
}
