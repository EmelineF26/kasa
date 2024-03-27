import { useState } from "react";
import style from './Collapse.module.scss';

function Collapse({ title, content, icon }) {
    const [isVisible, setIsVisible] = useState(false);

    function handleClick() {
        setIsVisible(!isVisible);
    }

    return (
        <div className={style.blocCollapse}>
                    <button type="button" onClick={() => handleClick()}>{title}{icon}</button>
                    {isVisible && <p>{content}</p>}
        </div>
    );
}

export default Collapse;