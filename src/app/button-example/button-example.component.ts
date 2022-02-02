import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-button-example',
  template: `<my-lib-button [label]="buttonLabel"></my-lib-button>`,
  styleUrls: ['./button-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonExampleComponent {
  public buttonLabel = 'Example Label';
}
