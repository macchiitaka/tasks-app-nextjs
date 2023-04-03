import type { Meta, StoryObj } from '@storybook/react';

import { View } from './TaskItem';

const meta: Meta<typeof View> = {
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

export const Default: StoryObj<typeof View> = {
  args: {},
};

export const Done: StoryObj<typeof View> = {
  args: {
    done: true,
  },
};

export const Sample: StoryObj<typeof View> = {
  args: {
    done: true,
    title: 'sample',
  },
};
