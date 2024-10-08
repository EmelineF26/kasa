import logo from '../images/logoFooter.png';
import style from './Footer.module.scss';

function Footer() {
    return (
        <div className={style.footer}>
            <img src={logo} className={style.logoFooter} alt="Kasa, agence de location d'appartements" />
            <footer className={style.footerText}>2020 Kasa. All rights reserved</footer>
        </div>
    )
}

export default Footer;