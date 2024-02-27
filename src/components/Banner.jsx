function Banner(props) {
    return(
        <>
        <p>{props.text}</p>
        <img src={props.img} alt="Kasa, location d'appartements" />
        </>
    )
}

export default Banner;