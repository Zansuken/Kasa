import About from 'pages/About/About';
import Accommodation from 'pages/Accommodation/Accommodation';
import Home from 'pages/Home/Home';
import NotFound from 'pages/NotFound/NotFound';
import { FC, PropsWithChildren } from 'react';
import { BrowserRouter, Route, Routes as CustomRoutes } from 'react-router-dom';

export const CustomRouter: FC<PropsWithChildren> = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

export const Routes: FC = () => {
  return (
    <CustomRoutes>
      <Route path="/Kasa/" element={<Home />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/Kasa/logements/:logementId"
        element={<Accommodation />}
      ></Route>
      <Route path="/Kasa/a-propos" element={<About />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </CustomRoutes>
  );
};
