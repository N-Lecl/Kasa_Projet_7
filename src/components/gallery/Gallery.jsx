import datas from '../../data/data';
import Card from '../card/CreateCard'; 

// Définit un composant fonctionnel Gallery
export default function Gallery() {
    return (
        <main>
            <div className="gallery_card">
                {/* Utilise la méthode map pour créer des composants Card en fonction des données */}
                {datas.map((data) => {
                    return (
                        // Rend un composant Card avec les propriétés spécifiées
                        <Card
                            key={data.id} // Clé unique pour chaque composant
                            id={data.id}
                            title={data.title}
                            cover={data.cover}
                        />
                    );
                })}
            </div>
        </main>
    );
}
