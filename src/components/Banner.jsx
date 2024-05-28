import style from './Banner.module.scss';

function Banner(props) {
    return (
        <div className={style.banner}>
            <h1 className={style.bannerText}>{props.text}</h1>
            <img src={props.img} className={style.bannerImg} alt="Kasa, location d'appartements" />
        </div>
    )
}

export default Banner;