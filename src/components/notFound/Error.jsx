import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/error.css';

export default function TextZone() {
      const host = window.location.origin;

      return (
            <main>
                  <div className="textZone">
                        <div>
                              <h1 className="title_error">404</h1>
                              <p className="title_information">
                                    Oups! La page que vous demandez n'existe
                                    pas.
                              </p>
                        </div>
                        <div>
                              <p className="redirection_home">
                                    <Link to={host}>
                                          Retrouver nous sur la page d'accueil.
                                    </Link>
                              </p>
                        </div>
                  </div>
            </main>
      );
}

// EN COURS A TERMINER
