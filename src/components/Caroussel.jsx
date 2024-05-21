import style from './Caroussel.module.scss';
import { useState } from 'react';

function Caroussel({ pictures, title }) {
    const [index, setIndex] = useState(0);

    const nextPicture = () => {
        setIndex((index + 1) % pictures.length);
    };

    const prevPicture = () => {
        setIndex((index - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className={style.carousselDiv}>
            <img className={style.imgCaroussel} src={pictures[index]} alt={title} />
            {pictures.length > 1 && (
                <>
                    <button onClick={prevPicture} className={style.buttonPrev}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button onClick={nextPicture} className={style.buttonNext}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                    <p className={style.imageCounter}>{index + 1} / {pictures.length}</p>
                </>
            )}
        </div>
    );
}

export default Caroussel;