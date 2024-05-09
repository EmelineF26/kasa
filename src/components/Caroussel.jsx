import style from './Caroussel.module.scss';
import { useState } from 'react';

function Caroussel({ pictures, title }) {
    const [index, setIndex] = useState(0);

    const nextPicture = () => {
        const newIndex = (index + 1) % pictures.length;
        setIndex(newIndex);
    };

    const prevPicture = () => {
        const newIndex = (index - 1 + pictures.length) % pictures.length;
        setIndex(newIndex);
    };

    return (
        <div>
            <button onClick={prevPicture}>Previous</button>
            <img src={pictures[index]} alt={title} />
            <button onClick={nextPicture}>Next</button>
        </div>
    );
}

export default Caroussel;