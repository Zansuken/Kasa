import { createContext, FC, PropsWithChildren, useState } from 'react';

import { Accommodation } from 'types/accommodations';
import { fetchAccommodations } from 'api/requests';

export type AccommodationsCtxType = {
  accommodations: Accommodation[];
  fetchData: () => Promise<void>;
  loading?: boolean;
};

const accommodationsCtxDefaultValue: AccommodationsCtxType = {
  accommodations: [],
  fetchData: () => Promise.resolve(),
};

export const accommodationsCtx = createContext<AccommodationsCtxType>(
  accommodationsCtxDefaultValue
);

const AccommodationsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState<boolean | undefined>(undefined);

  const context = {
    accommodations,
    fetchData: async () => {
      setLoading(true);

      try {
        const response = await fetchAccommodations();
        setAccommodations(response);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    },
    loading,
  };

  return (
    <accommodationsCtx.Provider value={context}>
      {children}
    </accommodationsCtx.Provider>
  );
};

export default AccommodationsProvider;
