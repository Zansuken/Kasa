import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

import accommodationsData from 'data/accommodations.json';
import {
  AccommodationInterface,
  AccommodationsType,
} from 'types/accommodations';

export const accommodationsCtx = createContext<AccommodationsType | null>(null);

const AccommodationsCtx: FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<AccommodationInterface[]>([]);

  useEffect(() => {
    setData(accommodationsData);
  }, []);

  return (
    <accommodationsCtx.Provider value={data}>
      {children}
    </accommodationsCtx.Provider>
  );
};

export default AccommodationsCtx;
