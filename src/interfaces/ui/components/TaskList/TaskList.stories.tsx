import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import {
  getFetchTasksErrorHandlers,
  getFetchTasksHandlers,
} from '../../../../../msw/handlers';
import { TaskList } from './TaskList';

const meta: Meta<typeof TaskList> = {
  component: TaskList,
};
export default meta;

export const Default: StoryObj<typeof TaskList> = {
  parameters: {
    msw: {
      handlers: [getFetchTasksHandlers()],
    },
  },
};

export const Error: StoryObj<typeof TaskList> = {
  parameters: {
    msw: {
      handlers: [getFetchTasksErrorHandlers()],
    },
  },
};

export const ClickFirstCheckbox: StoryObj<typeof TaskList> = {
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

export const TestToggleFirstCheckbox: StoryObj<typeof TaskList> = {
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
