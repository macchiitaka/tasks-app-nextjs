import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import type { DehydratedState } from 'react-query';
import { dehydrate, QueryClient } from 'react-query';

import { staticPath } from '../../../lib/$path';
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

export const Index: React.VFC<{
  dehydratedState: DehydratedState;
}> = () => (
  <>
    <Head>
      <title>Tasks</title>
    </Head>
    <Page />
    <Image
      src={staticPath.mountain_png}
      alt="Mountain"
      width={1882}
      height={1322}
    />
  </>
);
