import style from './About.module.scss';
import '../components/Collapse.module.scss';
import ImgBanner from '../images/aboutBanner.png';
import CollapseAbout from '../components/CollapseAbout';

function About() {
    return (
        <div className={style.about}>
            <img src={ImgBanner} className={style.ImgBanner} />
            <CollapseAbout />
        </div>
    )
}

export default About;