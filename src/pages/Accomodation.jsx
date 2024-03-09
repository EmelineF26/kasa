import React from "react";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import data from '../data/logements.json';

function Accomodation() {
    return (
        <>
        <NavBar />
        <p>Je suis la page de location</p>
        <Footer />
        </>
    )
}

export default Accomodation;