import React from 'react';
import style from './HomePage.module.scss';
import Logo from '../images/logoKasa.png';
import Cards from '../components/Cards';
import data from '../data/logements.json';

function HomePage() {
        const Cards = ({ data }) => {
            return (
              <div>
                  <img src={Logo} alt="Kasa, location d'appartements" />
                  <p>Chez vous, partout et ailleurs</p>
                <ul>
                {data && data.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div>
            <Cards data={['Donnée 1', 'Donnée 2', 'Donnée 3']} />
        </div>
    );
}

export default HomePage;