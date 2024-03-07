import style from './About.module.scss';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import ImgBanner from '../images/aboutBanner.png';

function About() {
    return (
        <div className={style.about}>
            <img src={ImgBanner} className={style.ImgBanner} />
            {/* <Banner /> */}
            <Collapse />
        </div>
    )
}

export default About;