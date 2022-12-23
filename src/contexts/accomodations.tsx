import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import {
  AccomodationInterface,
  AccomodationsType,
} from '../types/accomodations';
import accomodationsData from '../data/accomodations.json';

export const accomodationsCtxt = createContext<AccomodationsType | null>(null);

const AccomodationsCtxt: FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<AccomodationInterface[]>([]);

  useEffect(() => {
    setData(accomodationsData);
  }, []);

  return (
    <accomodationsCtxt.Provider value={data}>
      {children}
    </accomodationsCtxt.Provider>
  );
};

export default AccomodationsCtxt;
