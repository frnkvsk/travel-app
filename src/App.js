import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ModelProvider from './context/providers/ModelProvider';
import NavProvider from './context/providers/NavProvider';
import Nav from './components/Nav';
import Toggle from './components/Toggle';
import DestinationsProvider from './context/providers/DestinationsProvider';

function App() {
  return (
    <BrowserRouter>
      <ModelProvider>
        <NavProvider>
          <DestinationsProvider>
            <Toggle />
            <Nav />
            <HelmetProvider>
              <Routes>          
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />             
                <Route path='*' element={<NotFound />} />                  
              </Routes>  
            </HelmetProvider>            
          </DestinationsProvider>                   
        </NavProvider>
      </ModelProvider>   
    </BrowserRouter>
  );
}

export default App;
