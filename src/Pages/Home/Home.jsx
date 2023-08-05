import React from 'react';
//Import de nos composants
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';

function Home() {
      return (
            <div>
                  <Navbar />
                  <Banner />
                  <Gallery />
                  <Footer />
            </div>
      );
}

export default Home;
