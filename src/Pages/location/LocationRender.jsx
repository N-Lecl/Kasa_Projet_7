import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import datas from '../../data/data';
import Slider from '../../components/carousel/Carousel';
import Collapse from '../../components/collapse/Collapse';
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';

export default function Accomodation() {
      let navigate = useNavigate();
      const [dataExists, setDataExists] = useState(false);
      const [imageSlider, setImageSlider] = useState([]);
      const idParams = useParams('id').id;
      const dataSelection = datas.filter((data) => data.id === idParams);

      useEffect(() => {
            // Si l'élément n'existe pas > navigate page not-found qui correspond à rien/tout le reste *
            if (dataSelection.length === 0) {
                  navigate('/not-found');
                  return;
            }
            // dataExists true si l'élément existe
            setDataExists(true);
            // Enregistrement de/des valeurs dans setter
            setImageSlider(dataSelection[0].pictures);
      }, [dataSelection, idParams, navigate]);
      // Si il n'existe pas on retourne une valeur null pour empêcher le rendu
      if (!dataExists) {
            return null;
      }

      const name = dataSelection[0].host.name.split(' ');
      const ratingNumber = dataSelection[0].rating;
      const description = dataSelection[0].description;
      const equipments = dataSelection[0].equipments;

      return (
            <>
                  {/* Passage de prop avec la valeur imageSlider  */}
                  <Slider imageSlider={imageSlider} />
                  <main className="accomodation">
                        <div className="accomodation_description">
                              <div className="accomodation_description_infos">
                                    {/* Titre de l'annonce  */}
                                    <h1>{dataSelection[0].title}</h1>
                                    {/* Lieux l'annonce  */}
                                    <p>{dataSelection[0].location}</p>
                                    <div>
                                          {/* On map sur les tags pour retourner notre/nos button  */}
                                          {dataSelection[0].tags.map(
                                                (tag, index) => {
                                                      return (
                                                            <button
                                                                  key={`${index}${tag}`}
                                                            >
                                                                  {tag}
                                                            </button>
                                                      );
                                                }
                                          )}
                                    </div>
                              </div>
                              {/* Affichage information de l'hôte avec la picture  */}
                              <div className="host_information_block">
                                    <div>
                                          <div className="host_information">
                                                <div>
                                                      <span>{name[0]}</span>{' '}
                                                      <br />
                                                      <span> {name[1]}</span>
                                                </div>

                                                <img
                                                      src={
                                                            dataSelection[0]
                                                                  .host.picture
                                                      }
                                                      alt="Vote hôte !"
                                                />
                                          </div>
                                    </div>
                                    {/*Creation d'un array de 5 stars vides */}
                                    <div className="host_stars">
                                          {[...Array(5)].map((_, index) => {
                                                // Déclaration de index +1 dans notre tableau
                                                const ratingValue = index + 1;
                                                // On déclare une variable qui va accueillier nos 2 couleur de stars un peu plus bas
                                                let starImage;
                                                // Si le ratingValue est inférieur ou égal au rating number(data)
                                                if (
                                                      // Index +1
                                                      ratingValue <=
                                                      // Nombre de rating dans data
                                                      ratingNumber
                                                ) {
                                                      // On récupére dans starImage l'étoile rouge
                                                      starImage = redStar;
                                                } else {
                                                      // ou grise...
                                                      starImage = greyStar;
                                                }
                                                // On retourne le résultat
                                                return (
                                                      <img
                                                            // On déclare key pour aider React à se repérer lors du changement des éléments du DomVirtuel au DomBrowser
                                                            key={index}
                                                            src={starImage}
                                                            alt="star"
                                                      />
                                                );
                                          })}
                                    </div>
                              </div>
                        </div>
                        <div className="accomodation_collapse">
                              <div className="accomodation_collapse_item">
                                    <Collapse
                                          title={'Description'}
                                          content={description}
                                    />
                              </div>
                              <div className="accomodation_collapse_item">
                                    <Collapse
                                          title={'Équipements'}
                                          content={equipments}
                                    />
                              </div>
                        </div>
                  </main>
            </>
      );
}
