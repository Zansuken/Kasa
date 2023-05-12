import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import AccommodationsProvider from './contexts/accommodations';
import AppProvider from 'contexts/app';
import classes from './App.module.scss';
import { Routes } from 'Router';

const App = () => (
  <AppProvider>
    <AccommodationsProvider>
      <div className={classes['root']}>
        <Header />
        <Routes />
        <Footer />
      </div>
    </AccommodationsProvider>
  </AppProvider>
);

export default App;
