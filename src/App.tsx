import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import AccomodationsCtxt from './contexts/accomodations';
import About from './pages/About/About';
import Accomodation from './pages/Accomodation/Accomodation';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

const App = () => (
  <AccomodationsCtxt>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/logements/:logementId" element={<Accomodation />}></Route>
        <Route path="a-propos" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </AccomodationsCtxt>
);

export default App;
