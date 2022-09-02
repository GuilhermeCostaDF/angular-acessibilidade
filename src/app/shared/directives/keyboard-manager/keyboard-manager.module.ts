import { KeyboardManagerDirective } from './keyboard-manager.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [KeyboardManagerDirective],
  imports: [CommonModule],
  exports: [KeyboardManagerDirective],
})
export class KeyboardManagerModule {}
