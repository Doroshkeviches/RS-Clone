import { getProfileData } from './getProfileData';
export function renderProfilePage() {
  const user = localStorage.getItem('username') as string;
  getProfileData(user);
}
