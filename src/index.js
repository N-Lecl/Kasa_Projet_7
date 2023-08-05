import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/about/About';
import Location from './Pages/location/Location';
import NotFound from './Pages/notFound/NotFound';

const root = createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
            <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/location/:id" element={<Location />} />
                  <Route exact path="/About" element={<About />} />
                  {/* Rendre la page 404 en cas d'erreur URL */}
                  <Route exact path="*" element={<NotFound />} />
            </Routes>
      </BrowserRouter>
);
