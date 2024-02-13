import style from './HomePage.module.scss';
import Logo from '../images/logoKasa.png';
import Cards from '../components/Cards';
import data from '../data/logements.json';

function HomePage() {
    return(
        <>
            <img src={Logo} alt="Kasa, location d'appartements" />
        <p>Chez vous, partout et ailleurs</p>
        </>
    )
}

export default HomePage;