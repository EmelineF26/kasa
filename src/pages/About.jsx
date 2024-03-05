import style from './About.module.scss';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';

function About() {
    return (
        <div className={style.about}>
            <Banner />
            <Collapse />
        </div>
    )
}

export default About;