import { useState } from "react";
import style from './Collapse.module.scss';

function Collapse() {
    const [isVisible, setIsVisible] = useState([false, false, false, false]);

    function handleClick(index) {
        const updatedVisibility = [...isVisible];
        updatedVisibility[index] = !updatedVisibility[index]; // Inversion de l'état du collapse
        setIsVisible(updatedVisibility); // Mise à jour de l'état
    }

    return (
        <div className={style.blocCollapse}>
            <button type="button" onClick={() => handleClick(0)}>Fiabilité</button>
            {isVisible[0] && <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>}
            <button type="button" onClick={() => handleClick(1)}>Respect</button>
            {isVisible[1] && <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
            <button type="button" onClick={() => handleClick(2)}>Service</button>
            {isVisible[2] && <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
            <button type="button" onClick={() => handleClick(3)}>Sécurité</button>
            {isVisible[3] && <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}
        </div>
    );
}

export default Collapse;