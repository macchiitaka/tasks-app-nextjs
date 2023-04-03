import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';

import { getFetchTasksHandlers, tasks } from '../../../../../msw/handlers';
import { Provider } from '../../../../infrastructure/controllers/_app';
import { assert } from '../../../../utils/type';
import * as stories from './TaskList.stories';

const { ClickFirstCheckbox } = composeStories(stories);
const server = setupServer(getFetchTasksHandlers());

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

// eslint-disable-next-line jest/expect-expect
it('チェックボックスをクリックすると状態が反転する', async () => {
  assert(tasks[0]);

  const { container } = render(<ClickFirstCheckbox />, { wrapper: Provider });
  await screen.findByRole('checkbox', {
    name: tasks[0].title,
    checked: tasks[0].done,
  });

  await ClickFirstCheckbox.play({ canvasElement: container });
  await screen.findByRole('checkbox', {
    name: tasks[0].title,
    checked: !tasks[0].done,
  });

  await ClickFirstCheckbox.play({ canvasElement: container });
  await screen.findByRole('checkbox', {
    name: tasks[0].title,
    checked: tasks[0].done,
  });
});
