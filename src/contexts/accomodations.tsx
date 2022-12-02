import { createContext, useEffect, useState } from 'react';
import accomodationsData from '../data/accomodations.json';

const initialValue = {};

const accomodationsCtxt = createContext(initialValue);

type Props = {
  children: JSX.Element;
};

const AccomodationsCtxt = ({ children }: Props) => {
  const [data, setData] = useState({});

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
