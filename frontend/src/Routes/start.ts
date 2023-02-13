import { createBasePage } from './base.page';

export function startModue(module: { start: () => void }) {
  createBasePage();
  module.start();
}
