function Rating({ rating }) {
    const stars = Array.from({ length: 5 }, (_, i) => i + 1).join('');

    return (
        <div>
            {stars}
        </div>
    );
}

export default Rating;