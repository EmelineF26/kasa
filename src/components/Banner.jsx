

function Banner(props) {
    return(
        <>
        <p>Texte: {props.text}</p>
        <img src={props.img} alt="Kasa, location d'appartements" />
        </>
    )
}

export default Banner;