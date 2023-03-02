export function getSearchInputValue() {
  const inputSearch = document.getElementById(
    'leftContainerInputSearch'
  ) as HTMLInputElement;
  return inputSearch.value;
}
