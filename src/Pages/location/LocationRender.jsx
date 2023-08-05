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
            if (dataSelection.length === 0) {
                  navigate('/not-found');
                  return;
            }
            setDataExists(true);
            setImageSlider(dataSelection[0].pictures);
      }, [dataSelection, idParams, navigate]);
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
                                                const ratingValue = index + 1;
                                                let starImage;
                                                if (
                                                      ratingValue <=
                                                      ratingNumber
                                                ) {
                                                      starImage = redStar;
                                                } else {
                                                      starImage = greyStar;
                                                }
                                                return (
                                                      <img
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