import data from '../data/logements.json';
import { useParams, Navigate } from 'react-router-dom';
import './Error';

function Accomodation() {
    const { id } = useParams();
    console.log(id);

    const logement = data.find((element) => element.id === id);
    if (!logement) {
        return <Navigate to="/Error" replace={true} />;
    }
    console.log(logement);

    return (
        <div>
            {logement.map((element) => (
                <p key={element.id}>{element.title}</p>
            ))}
            <h1>Détails location</h1>
        </div>
    );
}

export default Accomodation;