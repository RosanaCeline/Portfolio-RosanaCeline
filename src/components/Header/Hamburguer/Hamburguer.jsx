import styles from './Hamburguer.module.css'

function Hamburguer({ isOpen }) {
    return (
        <div className={`${styles.hamburguerIcon} ${isOpen ? styles.open : ''}`}>
            <div className={styles.burguer}></div>
            <div className={styles.burguer}></div>
            <div className={styles.burguer}></div>
        </div>
    )
}

export default Hamburguer;