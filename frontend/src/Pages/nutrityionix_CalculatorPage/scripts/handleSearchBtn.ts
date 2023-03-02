import { searchFoodFetch } from './searchFoodFetch';
import { getSearchInputValue } from './getSearchInputValue';
export function handleSearchBtn() {
  const leftContainerItems = document.getElementById(
    'leftContainerItems'
  ) as HTMLElement;
  const searchBtn = document.getElementById(
    'leftContainerSearchBtn'
  ) as HTMLElement;
  searchBtn.addEventListener('click', () => {
    leftContainerItems.innerHTML = '';
    searchFoodFetch(getSearchInputValue());
  });
}
