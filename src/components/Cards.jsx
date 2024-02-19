import React from 'react';
import { Link } from 'react-router-dom';
import style from './Cards.module.scss';

function Cards({id, title, cover}) {
    return(
        <Link to={'/accomodation/${id}'}>
            <img src={cover} alt={"Kasa -" + title} />
            <h3 className={style.title}>{title}</h3>
        </Link>
    )
}

export default Cards;