import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { View } from './NewTaskForm';

const meta: ComponentMeta<typeof View> = {
  component: View,
  args: {
    value: '',
  },
};
export default meta;

export const Default: ComponentStoryObj<typeof View> = {
  args: {},
};
