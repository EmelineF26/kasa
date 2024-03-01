import React from 'react';
import { Link } from 'react-router-dom';
import style from './Cards.module.scss';

function Cards({id, title, cover}) {
    return(
        <Link to={'/accomodation/${id}'} className={style.styleCards}>
            <div>
                    <img src={cover} className={style.Image} alt={"Kasa -" + title} />
                    <h3 className={style.title}>{title}</h3>
            </div>
        </Link>
    )
}

export default Cards;