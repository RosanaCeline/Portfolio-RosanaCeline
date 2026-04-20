import { useEffect, useState } from 'react'
import Hamburguer from './Hamburguer/Hamburguer'
import styles from './Header.module.css'


function Header() {
    const [hamburguerOpen, setHamburguerOpen] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setHamburguerOpen(true);
            } else {
                setHamburguerOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleHamburguer = () => {
        setHamburguerOpen(!hamburguerOpen)
    }

    return (
        <div className={styles.header}>
            <h2 className={styles.logo}>Rosana Celine</h2>
            <nav className={styles.navBar}>
                <ul className={hamburguerOpen ? styles.menuOpen : styles.menu}>
                    <li><a href='#'>Início</a></li>
                    <li><a href='#'>Sobre mim</a></li>
                    <li><a href='#'>Projetos</a></li>
                    <li><a href='#'>Contato</a></li>
                </ul>

                <div className={styles.hamburguer} onClick={toggleHamburguer}>
                    <Hamburguer isOpen={hamburguerOpen}/>
                </div>
            </nav>
        </div>
    )
}

export default Header;