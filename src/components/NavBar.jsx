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
                            <h3>Accueil</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/About' className={({ isActive }) => isActive ? style.NavActive : style.Nav}>
                            <h3>A Propos</h3>
                        </NavLink>
                    </li>
                </ul>
        </nav>
    )
}

export default NavBar;