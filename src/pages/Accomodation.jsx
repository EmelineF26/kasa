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
            <h1>{logement.title}</h1>
            <h3>{logement.location}</h3>
                <div>
                    {/* Emplacement des tags */}
                </div>
            <div className={style.divHost}>
                <h4 className={style.hostName}>{logement.host.name}</h4>
                <img src={logement.host.picture} className={style.imgHost} alt='Avatar de la personne hébergeur' />
            </div>
                <div>
                    {/* Emplacement des stars */}
                </div>
            <div className={style.accomodationCollapse}>
                <div className={style.descriptionCollapse}>
                    <Collapse title={'Description'} content={logement.description} />
                </div>
                <div className={style.equipmentsCollapse}>
                    <Collapse title={'Équipments'} content={logement.equipments} />
                </div>
            </div>
            {/* {logement.pictures.length} */}
        </div>
    );
}

export default Accomodation;