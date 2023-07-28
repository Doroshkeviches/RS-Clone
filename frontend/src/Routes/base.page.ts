import { footerTemplate } from '../Pages/footer/footer.template';
import { headerTemplate } from '../Pages/header/header.template';

export function createBasePage() {
  (document.querySelector('body') as HTMLElement).innerHTML = `
    ${headerTemplate}
    <main class="root">
    </main>
    ${footerTemplate}`;
}
