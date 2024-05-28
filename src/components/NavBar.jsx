import Logo from '../images/logoKasa.png';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.scss';

function NavBar() {
    return (
        <nav className={style.navbar}>
            <div className={style.logoNav}>
                <img src={Logo} className={style.Logo} alt="Kasa, location d'appartements" />
            </div>
                <ul className={style.navList}>
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? style.NavActive : style.Nav}>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/About' className={({ isActive }) => isActive ? style.NavActive : style.Nav}>
                            <span>A Propos</span>
                        </NavLink>
                    </li>
                </ul>
        </nav>
    )
}

export default NavBar;