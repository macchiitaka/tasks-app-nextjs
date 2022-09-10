import { lazy, Suspense } from 'react';

import { DirectHydration } from '../src/interfaces/ui/components/DirectHydration';

const SelectiveHydration = lazy(
  () => import('../src/interfaces/ui/components/SelectiveHydration'),
);

const Hydration = () => (
  <>
    <DirectHydration />
    <Suspense fallback={null}>
      <SelectiveHydration />
    </Suspense>
  </>
);

export default Hydration;
