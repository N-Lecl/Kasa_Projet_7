import React from 'react';
//Import de nos composants
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import LocationRender from './LocationRender';

export default function Home() {
      return (
            <div>
                  <Header />
                  <LocationRender />
                  <Footer />
            </div>
      );
}
