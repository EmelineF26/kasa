import { useState } from "react";
import style from './Collapse.module.scss';

function Collapse({ title, content }) {
    const [isVisible, setIsVisible] = useState(false);

    function handleClick() {
        setIsVisible(!isVisible);
    }

    return (
            <div className={style.blocCollapse}>
                    <button type="button" className={style.buttonCollapse} onClick={() => handleClick()}>
                        {title}
                        <svg className={`${style.iconCollapse} ${isVisible ? style.open :  style.closed}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                    </button>
                    <p className={`${style.divCollapse} ${isVisible ? style.divOpen :  null}`} >{content}</p>
            </div>
    );
}

export default Collapse;