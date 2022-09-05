import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DisableContraolDirective } from './disable-control-directive';

@NgModule({
  declarations: [DisableContraolDirective],
  imports: [CommonModule],
  exports: [DisableContraolDirective],
})
export class DisableControlModule {}
