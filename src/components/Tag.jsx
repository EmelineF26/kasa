import style from './Tag.module.scss';

function Tag({ tag }) {

    return (
        <div className={style.tags}>{tag}</div>
    )
}

export default Tag;