import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'button-example',
  template: `<gs-lib-button [label]="buttonLabel"></gs-lib-button>`,
  styleUrls: ['./button-example.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonExampleComponent {
  public buttonLabel: string = 'Example Label';
}
