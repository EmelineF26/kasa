import style from './Banner.module.scss';

function Banner(props) {
    return (
        <div className={style.banner}>
            <p className={style.bannerText}>{props.text}</p>
            <img src={props.img} className={style.bannerImg} alt="Kasa, location d'appartements" />
        </div>
    )
}

export default Banner;