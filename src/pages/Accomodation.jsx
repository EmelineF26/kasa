import data from '../data/logements.json';
import { useParams, Navigate } from 'react-router-dom';
import './Error';
import Collapse from '../components/Collapse';
// import style from '../components/Collapse.module.scss';
import style from './Accomodation.module.scss';
import Rating from '../components/Rating';

function Accomodation() {
    const { id } = useParams();
    console.log(id);

    const logement = data.find((element) => element.id === id);
    if (!logement) {
        return <Navigate to="/Error" replace={true} />;
    }

    return (
        <div>
            <div className={style.blocLogement}>
                <div className={style.infosLogement}>
                    <h1>{logement.title}</h1>
                    <h3>{logement.location}</h3>
                    <p className={style.tags}>{logement.tags}</p>
                </div>
                <div className={style.divHost}>
                    <div className={style.textHost}>
                        <h4 className={style.hostName}>{logement.host.name}</h4>
                        <img src={logement.host.picture} className={style.imgHost} alt='Avatar de la personne hébergeur' />
                    </div>
                        <Rating className={style.rating} rating={logement.rating}/>
                </div>
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