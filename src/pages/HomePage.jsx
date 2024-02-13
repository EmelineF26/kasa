import './styles/HomePage.scss';
import Logo from './images/logoKasa.png';

function HomePage() {
    return(
        <>
            <img src={Logo} alt="Kasa, location d'appartements" />
        <p>Chez vous, partout et ailleurs</p>
        </>
    )
}

export default HomePage;