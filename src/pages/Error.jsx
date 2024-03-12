import { Link } from "react-router-dom";
import style from './Error.module.scss';

function Error() {
    return (
        <div className={style.error}>
            <p className={style.nbError}>404</p>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <p className={style.linkAccueil}><Link className={style.linkAccueil} to='/'>Retourner sur la page d'accueil</Link></p>
        </div>
    )
}

export default Error;