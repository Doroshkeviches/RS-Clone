import { createBasePage } from './base.page';
import { Module } from './Routes.interface';

export function startModue(module: Module) {
  createBasePage();
  module.start();
}
