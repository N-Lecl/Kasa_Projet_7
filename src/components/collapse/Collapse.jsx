import arrow from '../../assets/arrow.png';
import { useState } from 'react';
import '../styles/collapse.css';

// Création de composant collapse qui prend 2 propriétés
export default function Collapse({ title, content }) {
      // Initialisation de isCollapsed avec use state à true
      const [isCollapsed, setIsCollapsed] = useState(true);

      // Fonction qui inverse la valeur en utilisant le setter setIsCollapsed
      const toggleCollapse = () => {
            setIsCollapsed(!isCollapsed);
      };

      return (
            <div className="collapse">
                  {/* On surveille le click sur notre élément et ont déclenche la
                  fonction toggleCollapse */}
                  <h3 className="collapse_title" onClick={toggleCollapse}>
                        {/* Propriété passée au composant  */}
                        {title}
                        {/* On définie notre class en fonction de la valeur de  l'état */}
                        <img
                              className={`arrow ${
                                    isCollapsed ? 'arrow_down' : 'arrow_up'
                              }`}
                              src={arrow}
                              alt="arrow description"
                        />
                  </h3>
                  <div
                        // On vérifie la valeur et on modifie la class en fonction
                        className={`collapse_content${
                              isCollapsed ? '_hidden' : ''
                        }`}
                  >
                        {/* On vérifie que notre élément est une chaine de caractères  */}
                        {typeof content === 'string' ? (
                              <p>{content}</p>
                        ) : (
                              // Si c'est un tableau on affiche les éléments avec la méthode map
                              content.map((item, index) => (
                                    // On crée un paragraphe pour chaque élément
                                    <p key={index}>{item}</p>
                              ))
                        )}
                  </div>
            </div>
      );
}
