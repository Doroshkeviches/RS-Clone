export function handleItemContainerArray() {
  const degreeChange = 180;
  const itemContainerArray = document.querySelectorAll(
    '.item_container'
  ) as NodeListOf<HTMLElement>;
  itemContainerArray.forEach((item) => {
    let degrees = 0;
    const popup = item.querySelector('#foodItemPopup') as HTMLElement;
    popup.addEventListener('click', (e) => {
      const toggleItem = item.querySelector(
        '.item_container_calculator'
      ) as HTMLElement;
      if (
        (e.target as HTMLTextAreaElement).id !==
        'Item_container_calculator_input'
      ) {
        const svg = item.querySelector('#svgArrow') as HTMLElement;
        degrees += degreeChange;
        svg.style.transform = `rotate(${degrees}deg)`;
        toggleItem.classList.toggle('disabled');
      }
    });
  });
}
