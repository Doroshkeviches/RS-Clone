import { changeKcalProgress } from './changeKcalProgress';
export function changeTotalNutritions(
  kcal: number,
  protein: number,
  fat: number,
  carbohydrate: number
) {
  const totalKcalEl = document.getElementById(
    'calculator_footer_text_kcal'
  ) as HTMLElement;
  const totalProteinEl = document.getElementById(
    'calculator_footer_text_protein'
  ) as HTMLElement;
  const totalFatEl = document.getElementById(
    'calculator_footer_text_fat'
  ) as HTMLElement;
  const totalCarbohydrateEl = document.getElementById(
    'calculator_footer_text_carbohydrate'
  ) as HTMLElement;
  const totalKcal = (+totalKcalEl.innerHTML - kcal).toFixed(2);
  const totalProtein = (+totalProteinEl.innerHTML - protein).toFixed(2);
  const totalFat = (+totalFatEl.innerHTML - fat).toFixed(2);
  const totalCarbohydrate = (
    +totalCarbohydrateEl.innerHTML - carbohydrate
  ).toFixed(2);
  totalKcalEl.innerHTML = totalKcal;
  totalProteinEl.innerHTML = totalProtein;
  totalFatEl.innerHTML = totalFat;
  totalCarbohydrateEl.innerHTML = totalCarbohydrate;
  changeKcalProgress(+totalKcal);
}
