import { ROUTES } from 'constants/routes';
import About from 'pages/About/About';
import Accommodation from 'pages/Accommodation/Accommodation';
import Home from 'pages/Home/Home';
import NotFound from 'pages/NotFound/NotFound';
import { FC, PropsWithChildren } from 'react';
import {
  BrowserRouter,
  Route,
  Routes as CustomRoutes,
  Navigate,
} from 'react-router-dom';

export const CustomRouter: FC<PropsWithChildren> = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

export const Routes: FC = () => {
  return (
    <CustomRoutes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ACCOMMODATION} element={<Accommodation />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      <Route path="/" element={<Navigate to={ROUTES.HOME} />} />
      <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} />} />
    </CustomRoutes>
  );
};
