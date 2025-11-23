import '@/index.css';
import React from 'react';
import Home from './pages/Home';
import Denetui from './pages/Denetui';
import Laina from './pages/Laina';
import NoLossLottery from './pages/NoLossLottery';
import ElectricityPriceCalculator from './pages/ElectricityPriceCalculator';
import HomeassistantUI from './pages/HomeassistantUI';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/denetui' element={<Denetui />} />
          <Route path='/laina' element={<Laina />} />
          <Route path='/homeassistantui' element={<HomeassistantUI />} />
          <Route path='/nolosslottery' element={<NoLossLottery />} />
          <Route path='/kumpisahko' element={<ElectricityPriceCalculator />} />
        </Routes>
      </BrowserRouter>
      <footer className="p-4 text-center text-sm text-white bg-white dark:bg-black">
        © {new Date().getFullYear()} Hynnä Consulting Oy.
      </footer>
    </React.StrictMode>
  );
};

export default App;
