import style from '../components/Collapse.module.scss';
import ImgBanner from '../images/aboutBanner.png';
import Collapse from '../components/Collapse';

const aProposData = {
    text: [
        {id: 1, title: 'Fiabilité', content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'},
        {id: 2, title: 'Respect', content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'},
        {id: 3, title: 'Service', content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'},
        {id: 4, title: 'Sécurité', content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à la personne hôte que au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'},
    ]
}

function About() {
    return (
        <div className={style.about}>
            <img src={ImgBanner} className={style.ImgBanner} alt='Bannière' />
                <div className={style.content}>
                {aProposData.text.map((data) => (
                    <Collapse key={data.id} title={data.title} content={data.content} icon={data.icon} />
                ))}
                </div>
        </div>
    )
}

export default About;