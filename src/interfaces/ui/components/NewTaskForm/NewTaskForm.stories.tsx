import type { Meta, StoryObj } from '@storybook/react';

import { View } from './NewTaskForm';

const meta: Meta<typeof View> = {
  component: View,
  args: {
    value: '',
  },
};
export default meta;

export const Default: StoryObj<typeof View> = {
  args: {},
};
