import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/about/About';
import Location from './Pages/location/Location';
import NotFound from './Pages/notFound/NotFound';

// Crée un point de départ (root) pour le rendu de l'application dans l'élément avec l'ID 'root'
const root = createRoot(document.getElementById('root'));

// Utilise le point de départ pour rendre l'application React
root.render(
    <BrowserRouter>
        {/* Le composant <Routes> contient des définitions de routes */}
        <Routes>
            {/* Chaque <Route> définit une route avec un chemin spécifique et un composant à rendre */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/location/:id" element={<Location />} />
            <Route exact path="/About" element={<About />} />

            {/* La route suivante "capture" toutes les URL inconnues et affiche le composant <NotFound> */}
            <Route exact path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);