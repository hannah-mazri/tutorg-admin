import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { StackComponent } from './stack.component';
import { SplitComponent } from '@app/_components/split.component';
import { LoginIllustrationComponent } from '@app/_components/login-illustration.component';
import { RegisterIllustrationComponent } from '@app/_components/register-illustration.component';



@NgModule({
  declarations: [
    AlertComponent,
    StackComponent,
    SplitComponent,
    LoginIllustrationComponent,
    RegisterIllustrationComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    StackComponent,
    SplitComponent,
    LoginIllustrationComponent,
    RegisterIllustrationComponent,
  ]
})
export class SharedModule { }
