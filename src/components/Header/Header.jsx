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

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth <= 1024) {
                setHamburguerOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleHamburguer = () => {
        setHamburguerOpen(!hamburguerOpen)
    }

    const handleNavClick = () => {
        if (window.innerWidth <= 1024) {
            setHamburguerOpen(false);
        }
    };

    return (
        <header className={styles.header}>
            <h2 className={styles.logo}>Rosana Celine</h2>
            <nav className={styles.navBar}>
                <ul className={hamburguerOpen ? styles.menuOpen : styles.menu}>
                    <li><a href='#' onClick={handleNavClick}>Início</a></li>
                    <li><a href='#sobre-mim'>Sobre mim</a></li>
                    <li><a href='#projetos'>Projetos</a></li>
                    <li><a href='#contato'>Contato</a></li>
                </ul>

                <div className={styles.hamburguer} onClick={toggleHamburguer}>
                    <Hamburguer isOpen={hamburguerOpen}/>
                </div>
            </nav>
        </header>
    )
}

export default Header;