import { Component, Input } from '@angular/core';

@Component({
  selector: 'split',
  template: `
    <div class="flex" [ngClass]="parentClasses">
      <ng-content></ng-content>
    </div>
  `
})
export class SplitComponent {
  @Input() parentClasses = '';
}
