import React from 'react';
import style from './HomePage.module.scss';
import Cards from '../components/Cards'; // Import du composant Cards
import data from '../data/logements.json'; // Import des données
import Banner from '../components/Banner';
import BannerImage from '../images/BannerImage.png';

function HomePage() {
    return (
        <div className={style.homePage}>
          <Banner text="Chez vous, partout et ailleurs" img={BannerImage} />
            <div className={style.cardsContainer}>
              {data.map((item, index) => (
                <Cards key={item.id} id={item.id} title={item.title} cover={item.cover} />
                  ))}
            </div>
        </div>
    );
}

export default HomePage;