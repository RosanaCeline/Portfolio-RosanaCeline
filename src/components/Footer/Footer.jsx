import { ArrowUp } from 'lucide-react'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <span>@ {new Date().getFullYear()} - Rosana Celine.</span>
                <a href="#top" className={styles.toTop}><span>Voltar ao topo</span> <ArrowUp/></a>
            </div>
        </footer>
    )
}

export default Footer;