import style from '../pages/Accomodation.module.scss';

function Rating({ rating }) {
    const stars = [];
    const { pink_star, grey_star } = style;

    for (let i = 1; i <= 5; i++) {
        stars.push(i);
    }

    return (
        <div className={style.starsRating}>
            {stars.map((star) => (
                <i key={star} className={`fa-solid fa-star ${rating >= star ? pink_star : grey_star}`}></i>
            ))}
        </div>
    );
}

export default Rating;