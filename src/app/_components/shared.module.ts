import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { StackComponent } from './stack.component';
import { SplitComponent } from '@app/_components/split.component';



@NgModule({
  declarations: [
    AlertComponent,
    StackComponent,
    SplitComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    StackComponent,
    SplitComponent,
  ]
})
export class SharedModule { }
