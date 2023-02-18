import { changeTotalNutritions } from './changeTotalNutritions';
export function removeTotalContainerItem() {
  const removeBtn = document.querySelectorAll(
    '#total_container_item_remove'
  ) as NodeListOf<HTMLElement>;
  removeBtn.forEach((item) => {
    item.addEventListener('click', () => {
      const container = item.closest('.total_container_item') as HTMLElement;
      const totalContainer = document.getElementById(
        'total_container'
      ) as HTMLElement;
      totalContainer.removeChild(container);
      const dayKcal = +(container.querySelector('#day_kcal') as HTMLElement)
        .innerHTML;
      const dayProtein = +(
        container.querySelector('#day_protein') as HTMLElement
      ).innerHTML;
      const dayFat = +(container.querySelector('#day_fat') as HTMLElement)
        .innerHTML;
      const dayCarbohydrate = +(
        container.querySelector('#day_carbohydrate') as HTMLElement
      ).innerHTML;
      changeTotalNutritions(dayKcal, dayProtein, dayFat, dayCarbohydrate);
    });
  });
}
