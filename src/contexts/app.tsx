import { fetchAbout } from 'api/requests';
import { FC, PropsWithChildren, createContext, useState } from 'react';

export type AboutSection = {
  label: string;
  content: string;
};

export type AppCtxType = {
  about: {
    content: {
      sections: AboutSection[];
    };
    fetchData: () => Promise<void>;
  };
};

export const appCtx = createContext<AppCtxType>({
  about: {
    content: {
      sections: [],
    },
    fetchData: async () => Promise.resolve(),
  },
});

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [aboutData, setAboutData] = useState<AboutSection[]>([]);

  const context = {
    about: {
      content: {
        sections: aboutData,
      },
      fetchData: async () => {
        try {
          const response = await fetchAbout();
          setAboutData(response);
        } catch (error) {
          console.error(error);
        }
      },
    },
  };

  return <appCtx.Provider value={context}>{children}</appCtx.Provider>;
};

export default AppProvider;
