import { Link } from 'react-router-dom'; 
import '../styles/galleryCard.css'; 

// Définit un composant fonctionnel Card qui prend des propriétés (id, title, cover)
export default function Card({ id, title, cover }) {
    return (
        <div className='gallery_card_block'>
            {/* Crée un lien qui pointe vers une page de détails (utilisant le composant Link) */}
            <Link className="link" to={`/location/${id}`}>
                {/* Affiche une image avec la source "cover" et le titre de la carte */}
                <img src={cover} alt={title} className="dataImg" />
                <h3 className="h3">{title}</h3>
            </Link>
        </div>
    );
}
