import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { View } from './TaskItem';

const meta: ComponentMeta<typeof View> = {
  component: View,
  args: {
    id: 1,
    createdAt: '2021-01-01 00:00',
    updatedAt: '2021-01-01 00:00',
    title: 'TODO_01',
    done: false,
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'listitem',
            enabled: false,
          },
        ],
      },
    },
  },
};
export default meta;

export const Default: ComponentStoryObj<typeof View> = {
  args: {},
};

export const Done: ComponentStoryObj<typeof View> = {
  args: {
    done: true,
  },
};

export const Sample: ComponentStoryObj<typeof View> = {
  args: {
    done: true,
    title: 'sample',
  },
};
