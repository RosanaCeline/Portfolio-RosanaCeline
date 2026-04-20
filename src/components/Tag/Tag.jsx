import styles from './Tag.module.css'

function Tag({ text, color }) {
    const tagStyle = {
        backgroundColor: color,
    };

    return(
        <div className={styles.tag} style={tagStyle}>
            {text}
        </div>
    )
}

export default Tag;