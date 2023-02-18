export function calculateNutritions(
  string: string,
  container: HTMLElement,
  weight: number
) {
  const calculateWeight = 100;
  return +(
    (+(container.querySelector(`${string}`) as HTMLElement).innerHTML *
      weight) /
    calculateWeight
  ).toFixed(2);
}
