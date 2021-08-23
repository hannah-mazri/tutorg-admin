import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { StackComponent } from './stack.component';



@NgModule({
  declarations: [
    AlertComponent,
    StackComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    StackComponent,
  ]
})
export class SharedModule { }
