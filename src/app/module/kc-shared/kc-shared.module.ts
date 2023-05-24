import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputMaskModule
  ],
  exports: [
    InputMaskModule
  ]
})
export class KcSharedModule { }
