import { Component, Input } from '@angular/core';

@Component({
  selector: 'split',
  template: `
    <ng-content></ng-content>
  `
})
export class SplitComponent {
  @Input() parentClasses = '';
}
