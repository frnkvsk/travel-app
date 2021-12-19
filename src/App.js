import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ModelProvider from './context/providers/ModelProvider';


function App() {
  return (
    <BrowserRouter>
      <ModelProvider>
        <Routes>          
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />                  
        </Routes>   
      </ModelProvider>   
    </BrowserRouter>
  );
}

export default App;
