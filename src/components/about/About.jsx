import React from 'react';
import Collapse from '../collapse/Collapse';
import aboutData from '../../data/about.js';
import '../styles/collapse.css';
import '../styles/about.css';

export default function About() {
      const dataSelection = aboutData.map((data) => data);

      // RECUPERATION DE NOS COLLAPSE DEPUIS DOSSIER DATA ABOUT

      const fiability = dataSelection[0].Fiabilité;
      const respect = dataSelection[0].Respect;
      const service = dataSelection[0].Service;
      const securite = dataSelection[0].Fiabilité;

      return (
            <div>
                  <div className="accomodation_collapse_about">
                        <Collapse title={'Fiabilité'} content={fiability} />
                  </div>
                  <div className="accomodation_collapse_about">
                        <Collapse title={'Respect'} content={respect} />
                  </div>
                  <div className="accomodation_collapse_about">
                        <Collapse title={'Service'} content={service} />
                  </div>
                  <div className="accomodation_collapse_about">
                        <Collapse title={'Securite'} content={securite} />
                  </div>
            </div>
      );
}