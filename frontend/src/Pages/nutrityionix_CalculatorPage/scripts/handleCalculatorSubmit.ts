import { calculateNutritionsInSelectProduct } from './calculateNutritionsInSelectProduct';
export function handleCalculatorSubmit() {
  const calculatorSubmit = document.querySelectorAll(
    '#calculatorSumbit'
  ) as NodeListOf<HTMLElement>;
  calculatorSubmit.forEach((item) => {
    item.addEventListener('click', () => {
      const container = item.closest('#item_container') as HTMLElement;
      const weight = (
        container.querySelector(
          '#Item_container_calculator_input'
        ) as HTMLInputElement
      ).value as string;
      calculateNutritionsInSelectProduct(container, +weight);
    });
  });
}
