// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { ExampleLibModule } from '@example-lib';
import { ButtonExampleComponent } from '../app/button-example/button-example.component';

export default {
  title: 'example-lib/Button',
  component: ButtonExampleComponent,
  decorators: [
    moduleMetadata({
      imports: [ExampleLibModule],
    }),
  ],
} as Meta;

const Template: Story<ButtonExampleComponent> = (args: ButtonExampleComponent) => ({
  props: args,
});

export const ButtonExample = Template.bind({});
