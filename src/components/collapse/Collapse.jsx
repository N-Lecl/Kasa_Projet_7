import arrow from '../../assets/arrow.png';
import { useState } from 'react';
import '../styles/collapse.css';

export default function Collapse({ title, content }) {
      const [isCollapsed, setIsCollapsed] = useState(true);

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
                        className={`collapse_content${
                              isCollapsed ? '_hidden' : ''
                        }`}
                  >
                        {/* On vérifie que notre élément est une chaine de caractères  */}
                        {typeof content === 'string' ? (
                              <p>{content}</p>
                        ) : (
                              content.map((item, index) => (
                                    <p key={index}>{item}</p>
                              ))
                        )}
                  </div>
            </div>
      );
}