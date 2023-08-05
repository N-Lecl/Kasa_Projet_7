import datas from '../../data/data';
import Card from '../card/CreateCard';

export default function Gallery() {
      return (
            <main>
                  <div className="gallery_card">
                        {datas.map((data) => {
                              return (
                                    <Card
                                          key={data.id}
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