import style from './Caroussel.module.scss';
import { useState } from 'react';

function Caroussel({ pictures, title }) {
    const [index, setIndex] = useState(0);

    return (
        <div>
            <img src={pictures[index]} alt={title} />
        </div>
    )
}

export default Caroussel;