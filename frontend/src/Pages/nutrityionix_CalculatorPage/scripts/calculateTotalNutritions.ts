import { changeKcalProgress } from './changeKcalProgress';
export function calculateTotalNutritions(
  kcal: number,
  protein: number,
  fat: number,
  carbohydrate: number
) {
  const calculatorFooterTextKcal = document.getElementById(
    'calculator_footer_text_kcal'
  ) as HTMLElement;
  const calculatorFooterTextProtein = document.getElementById(
    'calculator_footer_text_protein'
  ) as HTMLElement;
  const calculatorFooterTextFat = document.getElementById(
    'calculator_footer_text_fat'
  ) as HTMLElement;
  const calculatorFooterTextCarbohydrate = document.getElementById(
    'calculator_footer_text_carbohydrate'
  ) as HTMLElement;
  const calculateKcal: number = +calculatorFooterTextKcal.innerHTML + +kcal;
  const calculateProtein: number =
    +calculatorFooterTextProtein.innerHTML + +protein;
  const calculateFat: number = +calculatorFooterTextFat.innerHTML + +fat;
  const calculateCarbohydrate: number =
    +calculatorFooterTextCarbohydrate.innerHTML + +carbohydrate;
  calculatorFooterTextKcal.innerHTML = calculateKcal.toFixed(2);
  calculatorFooterTextProtein.innerHTML = calculateProtein.toFixed(2);
  calculatorFooterTextFat.innerHTML = calculateFat.toFixed(2);
  calculatorFooterTextCarbohydrate.innerHTML = calculateCarbohydrate.toFixed(2);
  changeKcalProgress(calculateKcal);
}
