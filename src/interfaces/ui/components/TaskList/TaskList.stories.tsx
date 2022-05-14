import { expect } from '@storybook/jest';
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import {
  getFetchTasksErrorHandlers,
  getFetchTasksHandlers,
} from '../../../../../msw/handlers';
import { TaskList } from './TaskList';

const meta: ComponentMeta<typeof TaskList> = {
  component: TaskList,
};
export default meta;

export const Default: ComponentStoryObj<typeof TaskList> = {
  parameters: {
    msw: {
      handlers: [getFetchTasksHandlers()],
    },
  },
};

export const Error: ComponentStoryObj<typeof TaskList> = {
  parameters: {
    msw: {
      handlers: [getFetchTasksErrorHandlers()],
    },
  },
};

export const ClickFirstCheckbox: ComponentStoryObj<typeof TaskList> = {
  parameters: {
    msw: {
      handlers: [getFetchTasksHandlers()],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.findByRole('checkbox', {
      name: 'TODO_01',
    });
    await userEvent.click(checkbox);
  },
};

export const TestToggleFirstCheckbox: ComponentStoryObj<typeof TaskList> = {
  parameters: {
    msw: {
      handlers: [getFetchTasksHandlers()],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.findByRole('checkbox', {
      name: 'TODO_01',
    });
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    await waitFor(async () => {
      await expect(checkbox).toBeChecked();
    });
    await userEvent.click(checkbox);
    await waitFor(async () => {
      await expect(checkbox).not.toBeChecked();
    });
  },
};
