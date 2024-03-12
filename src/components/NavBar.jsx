import Logo from '../images/logoKasa.png';
import { Link } from 'react-router-dom';
import style from './NavBar.module.scss';

function NavBar() {
    return (
        <nav className={style.navbar}>
            <div className={style.logoNav}>
                <img src={Logo} className={style.Logo} alt="Kasa, location d'appartements" />
            </div>
                <ul className={style.navList}>
                    <li>
                        <Link to='/' className={style.Nav}>
                            <h3>Accueil</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to='/About' className={style.Nav}>
                            <h3>A Propos</h3>
                        </Link>
                    </li>
                </ul>
        </nav>
    )
}

export default NavBar;