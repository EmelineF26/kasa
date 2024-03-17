import React from "react";
import data from '../data/logements.json';

function Accomodation() {

    const dataLogements = () => {
        return (
            <div>
                <p>Caroussel</p>
                {/* <ul>
                    {data.map(({ title, location }) => (
                        <li key={title}>{title}</li>
                    ))}
                </ul> */}
            </div>
        );
    };

    return dataLogements();
}

export default Accomodation;