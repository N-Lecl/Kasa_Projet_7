import React from 'react';
import NotFound from '../../components/notFound/Error';
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

export default function renderText() {
      return (
            <div>
                  <Header />
                  <NotFound />
                  <Footer />
            </div>
      );
}
