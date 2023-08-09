import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import datas from '../../data/data';
import Slider from '../../components/carousel/Carousel';
import Collapse from '../../components/collapse/Collapse';
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';

// Définit un composant fonctionnel Accomodation
export default function Accomodation() {
    // Utilise le hook useNavigate pour la navigation
    let navigate = useNavigate();
    // Déclare un état pour vérifier si les données existent
    const [dataExists, setDataExists] = useState(false);
    // Déclare un état pour stocker les images du slider
    const [imageSlider, setImageSlider] = useState([]);
    // Récupère les paramètres d'URL (dans ce cas, "id")
    const idParams = useParams('id').id;
    // Filtrer les données pour obtenir celles correspondant à l'id dans les paramètres
    const dataSelection = datas.filter((data) => data.id === idParams);

    // Utilise le hook useEffect pour gérer le chargement des données
    useEffect(() => {
        // Vérifie si les données sélectionnées sont vides
        if (dataSelection.length === 0) {
            // Redirige vers la page "not-found"
            navigate('/not-found');
            return;
        }
        // Les données existent, met à jour l'état
        setDataExists(true);
        // Met à jour l'état des images du slider
        setImageSlider(dataSelection[0].pictures);
    }, [dataSelection, idParams, navigate]);

    // Si les données n'existent pas, renvoie null
    if (!dataExists) {
        return null;
    }

    // Extraits des données nécessaires pour afficher
    const name = dataSelection[0].host.name.split(' ');
    const ratingNumber = dataSelection[0].rating;
    const description = dataSelection[0].description;
    const equipments = dataSelection[0].equipments;

    return (
        <>
            {/* Inclut le composant Slider avec les images du slider passées en prop */}
            <Slider imageSlider={imageSlider} />
            <main className="accomodation">
                <div className="accomodation_description">
                    <div className="accomodation_description_infos">
                        {/* Affiche le titre de l'annonce */}
                        <h1>{dataSelection[0].title}</h1>
                        {/* Affiche l'emplacement de l'annonce */}
                        <p>{dataSelection[0].location}</p>
                        <div>
                            {/* Mappe sur les tags pour afficher les boutons */}
                            {dataSelection[0].tags.map((tag, index) => {
                                return <button key={`${index}${tag}`}>{tag}</button>;
                            })}
                        </div>
                    </div>
                    <div className="host_information_block">
                        {/* Affiche les informations sur l'hôte avec sa photo */}
                        <div>
                            <div className="host_information">
                                <div>
                                    <span>{name[0]}</span> <br />
                                    <span> {name[1]}</span>
                                </div>
                                <img src={dataSelection[0].host.picture} alt="Vote hôte !" />
                            </div>
                        </div>
                        <div className="host_stars">
                            {/* Mappe sur les étoiles pour les afficher */}
                            {[...Array(5)].map((_, index) => {
                                const ratingValue = index + 1;
                                let starImage;
                                if (ratingValue <= ratingNumber) {
                                    starImage = redStar;
                                } else {
                                    starImage = greyStar;
                                }
                                return <img key={index} src={starImage} alt="star" />;
                            })}
                        </div>
                    </div>
                </div>
                <div className="accomodation_collapse">
                    <div className="accomodation_collapse_item">
                        {/* Inclut le composant Collapse pour la description */}
                        <Collapse title={'Description'} content={description} />
                    </div>
                    <div className="accomodation_collapse_item">
                        {/* Inclut le composant Collapse pour les équipements */}
                        <Collapse title={'Équipements'} content={equipments} />
                    </div>
                </div>
            </main>
        </>
    );
}
