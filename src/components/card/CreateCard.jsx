import { Link } from 'react-router-dom';
import '../styles/galleryCard.css';

// Le composant prend 3 propriétés en entrée
export default function Card({ id, title, cover }) {
      return (
            <div className='gallery_card_block'>
                  {/* On crée un lien avec le composant Link en utilisant le système de routage  */}
                  <Link className="link" to={`/location/${id}`}>
                        <img src={cover} alt={title} className="dataImg" />
                        <h3 className="h3">{title}</h3>
                  </Link>
            </div>
      );
}
