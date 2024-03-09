import { Link } from "react-router-dom";
import style from './Error.module.scss';

function Error() {
    return (
        <div className={style.error}>
            <p>404</p>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link className={style.linkAccueil} to='/'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error;