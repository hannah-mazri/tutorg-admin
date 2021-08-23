import { Component, Input } from '@angular/core';

@Component({
  selector: 'stack',
  template: `
    <div class="flex flex-col" [ngClass]="parentClasses">
      <ng-content></ng-content>
    </div>
  `
})
export class StackComponent {
  @Input() parentClasses = '';
}
