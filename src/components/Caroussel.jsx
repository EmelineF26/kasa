import style from './Caroussel.module.scss';
import { useState } from 'react';

function Caroussel({ pictures, title }) {
    const [index, setIndex] = useState(0);
    // const chevronNext = `${style.chevron}`;

    const nextPicture = () => {
        setIndex((index + 1) % pictures.length);
    };

    const prevPicture = () => {
        setIndex((index - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className={style.carousselDiv}>
            <button onClick={prevPicture} className={style.button}>
                <i class="fa-solid fa-chevron-right"></i>
            </button>
                <img className={style.imgCaroussel} src={pictures[index]} alt={title} />
            <button onClick={nextPicture} className={style.buttonNext}>
                <i class="fa-solid fa-chevron-left"></i>
            </button>
        </div>
    );
}

export default Caroussel;