import React from "react";
import { Link } from 'react-router-dom';
import './styles/Cards.scss';

function Cards({id, title, cover}) {
    return(
        <Link to={'/accomodation/${id}'}>
            <img src={cover} alt={"Kasa -" + title} />
            <h3>{title}</h3>
        </Link>
    )
}

export default Cards;