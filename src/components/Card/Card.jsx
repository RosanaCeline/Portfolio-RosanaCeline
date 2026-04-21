import styles from './Card.module.css'

function Card({ icon, title, subtitle}) {
    const IconComponent = icon;

    return (
        <div className={styles.card}>
            <IconComponent className={styles.icon}/>
            <span className={styles.title}>{title}</span>
            <span className={styles.subtitle}>{subtitle}</span>
        </div>
    )
}

export default Card;