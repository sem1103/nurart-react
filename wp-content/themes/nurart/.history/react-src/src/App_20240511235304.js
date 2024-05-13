
import './App.css'
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Layaut from './components/Layaut';
import About from './components/About/About';
import ScrollToTop from './components/ScrollToTop';
import DesignService from './components/DesignService/DesignService';
import DigitPrint from './components/DigitPrint/DigitPrint';
import OfsetPrint from './components/OfsetPrint/OfsetPrint';
import Polygraphy from './components/ProductsPage/Polygraphy';
import Stamp from './components/ProductsPage/Stamp';
import React from 'react';
import PlasticCards from './components/ProductsPage/PlasticCards';
import PromoProducts from './components/ProductsPage/PromoProducts';

function App() {
  return (
    <>
     <ScrollToTop />
      <Routes >
        
        <Route path='/' element={<Layaut />}>
          <Route index element={<Home />} />
          <Route path='prod'>
          <Route path='polygraphy' element={<Polygraphy />} />
          <Route path='stamp' element={<Stamp />} />
          <Route path='plastic-cards' element={<PlasticCards />} />
          <Route path='promo-products' element={<PromoProducts />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route path='design-service' element={<DesignService />} />
          <Route path='digit-print' element={<DigitPrint />} />
          <Route path='ofset-print' element={<OfsetPrint />} />
          {/* <Route path='*' element={<DesignService />} /> */}
        </Route>
       
      </Routes>
      
    </>
  )
}

export default App;
