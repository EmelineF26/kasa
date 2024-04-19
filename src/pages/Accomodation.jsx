import data from '../data/logements.json';
import { useParams, Navigate } from 'react-router-dom';
import './Error';
import Collapse from '../components/Collapse';
// import style from '../components/Collapse.module.scss';
import style from './Accomodation.module.scss';

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
            <h2>{logement.title}</h2>
            <h4>{logement.location}</h4>
                <div>
                    {/* Emplacement des tags */}
                </div>
            <h5>{logement.host.name}</h5>
                <img src={logement.host.picture} className={style.imgHost} alt='Avatar de la personne hébergeur' />
                <div>
                    {/* Emplacement des stars */}
                </div>
            <div className={style.accomodationCollapse}>
                <Collapse title={'Description'} content={logement.description} />
                <Collapse title={'Équipments'} content={logement.equipments} />
            </div>
            {/* {logement.pictures.length} */}
        </div>
    );
}

export default Accomodation;