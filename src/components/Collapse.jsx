import { useState } from "react";

function Collapse () {
    const [isVisible, setIsVisible] = useState(false)

    function handleClick() {
        setIsVisible(true)
    }

    return(
        <>
        <button type="button" onClick={handleClick}>Collapse</button>
        { isVisible && <p>Afficher</p> }
        </>
    )
}

export default Collapse;