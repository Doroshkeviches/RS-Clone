export function createArrayOfGoals() {
  const array: string[] = [];
  const goalCollection = document.querySelectorAll('#goalItem');
  goalCollection.forEach((item) => {
    const goalItem = (item.querySelector('#labelText') as HTMLElement)
      .innerHTML as string;
    array.push(goalItem);
  });
  return array.join(',');
}
