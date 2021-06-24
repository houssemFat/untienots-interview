import { moduleMetadata, Story, Meta } from '@storybook/angular';


import { action } from '@storybook/addon-actions';

import { LoginComponent } from './login.component';
import { APP_BASE_HREF, CommonModule } from "@angular/common";
import { CoreModule } from "../../../../core/core.module";
import { RouterModule } from "@angular/router";
import { AuthModule } from "../../auth.module";
import { BrowserModule } from "@angular/platform-browser";


export default {
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserModule, CommonModule, CoreModule, AuthModule, RouterModule.forRoot([])],
      // FIND best way
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    }),
  ],
  excludeStories: /.*Data$/,
  title: 'Login',
  parameters: {
    a11y: {
      active: true
    }
  }
} as Meta;

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const Template: Story<LoginComponent> = args => ({
  props: {
    ...args,
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});

export const Default = Template.bind({});
Default.args = {};
