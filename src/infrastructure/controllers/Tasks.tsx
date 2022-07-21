import type { DehydratedState } from '@tanstack/react-query';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import { Page } from '../../interfaces/ui/components/Page';
import { fetchTasks, taskKeys } from '../../interfaces/ui/queries/tasks';

export const getServerSideProps: GetServerSideProps<{
  dehydratedState: DehydratedState;
}> = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(taskKeys.list(), fetchTasks);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const Tasks: React.FC<{
  dehydratedState: DehydratedState;
}> = () => (
  <>
    <Head>
      <title>Tasks</title>
    </Head>
    <Page />
  </>
);
