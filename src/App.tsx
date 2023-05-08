import { FC, PropsWithChildren } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import AccommodationsProvider from './contexts/accommodations';
import Accommodation from './pages/Accommodation/Accommodation';
import AppProvider from 'contexts/app';

export const CustomRouter: FC<PropsWithChildren> = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

const App = () => (
  <AppProvider>
    <AccommodationsProvider>
      <CustomRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/logements/:logementId"
            element={<Accommodation />}
          ></Route>
          <Route path="a-propos" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </CustomRouter>
    </AccommodationsProvider>
  </AppProvider>
);

export default App;
