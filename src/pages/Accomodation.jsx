import React from "react";
import data from '../data/logements.json';
import { useParams, Navigate } from 'react-router-dom';
import Error from './Error';

function Accomodation() {
    const { id } = useParams();
    console.log(id);

    const logement = data.find((element) => element.id === id);
    {id && (
        <Navigate to="/Error" replace={true} />
    )}
    console.log(logement);

    
    return (
        <>
        <h1>Détails location</h1>
        </>
    );
}

export default Accomodation;