import { searchFoodFetch } from './searchFoodFetch';
import { getSearchInputValue } from './getSearchInputValue';
export function handleSearchBtn() {
  const searchBtn = document.getElementById(
    'leftContainerSearchBtn'
  ) as HTMLElement;
  searchBtn.addEventListener('click', () => {
    searchFoodFetch(getSearchInputValue());
  });
}
