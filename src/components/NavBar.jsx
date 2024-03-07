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
                            <p>Accueil</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/About' className={style.Nav}>
                            <p>A propos</p>
                        </Link>
                    </li>
                </ul>
        </nav>
    )
}

export default NavBar;