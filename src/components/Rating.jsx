import style from '../pages/Accomodation.module.scss';

function Rating({ rating }) {
    const stars = Array.from({ length: 5 }, (_, i) => i + 1);
    const {pink_star, grey_star} = style;

    return (
        <div className={style.starsRating}>
            {stars.map((star)=>
                <i className={`fa-solid fa-star ${rating >= star ? pink_star : grey_star}`}></i>
            )}
        </div>
    );
}

export default Rating;