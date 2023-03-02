import { svg } from './svg';

export function addGoalItem(str: string) {
  const goalContainer = document.getElementById('goalContainer') as HTMLElement;
  goalContainer.innerHTML += `
    <div id="goalItem">
            ${svg}
            <label id="labelText" for="goal">${str}</label>
        </div>
    `;
}
