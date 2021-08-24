import { Component, Input } from '@angular/core';

@Component({
  selector: 'stack',
  template: `
    <ng-content></ng-content>
  `
})
export class StackComponent {
  @Input() parentClasses = '';
}
