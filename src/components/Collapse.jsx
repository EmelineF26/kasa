import { useState } from "react";
import style from './Collapse.module.scss';
import './CollapseAbout';

function Collapse({ titles, contents, icons }) {
    const [isVisible, setIsVisible] = useState(Array(titles.length).fill(false));

    function handleClick(index) {
        setIsVisible(prevState => {
          const updatedVisibility = [...prevState];
          updatedVisibility[index] = !updatedVisibility[index];
          return updatedVisibility;
        });
    }

    return (
        <div className={style.blocCollapse}>
            {titles.map((title, index) => (
                <div key={index}>
                    <button type="button" onClick={() => handleClick(index)}>{title}{icons[index]}</button>
                    {isVisible[index] && <p>{contents[index]}</p>}
                    <style>
                        {`
                            button.rotate {
                                transform: rotate(180deg);
                            }
                        `}
                    </style>
                </div>
            ))}
        </div>
    );
}

export default Collapse;