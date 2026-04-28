import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectModal from '../ProjectModal/ProjectModal';
import styles from './ProjectCard.module.css'

function ProjectCard({ name, description, photo, link, screenshots, index, total, cardRef, nextCardRef }) { 
    const [modalAberto, setModalAberto] = useState(false);
    const Motion = motion;

    const { scrollYProgress } = useScroll({
        target: nextCardRef, 
        offset: ["start end", "start start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, nextCardRef ? 0.9 : 1]);
    const brightness = useTransform(scrollYProgress, [0, 1], [1, nextCardRef ? 0.3 : 1]);

    return (
        <div className={styles.cardWrapper}>
            <Motion.div 
                ref={cardRef}
                className={styles.card}
                style={{ 
                    scale, 
                    filter: useTransform(brightness, (v) => `brightness(${v})`),
                    zIndex: total - index
                }}
            >
                <div className={styles.content}>
                    <div>
                        <div className={styles.header}>
                            <h2>{name}</h2>
                            <span className={styles.statusBadge}>{status}</span>
                        </div>
                    </div>
                        
                    <div className={styles.bottom}>
                        <p className={styles.description}>{description}</p>
                        <a href={link} target='_blank' rel="noreferrer">
                            <button className={styles.button}>Abrir projeto</button>
                        </a>
                        {/* 
                        <a onClick={() => setModalAberto(true)} className={styles.toScreenshots}>
                            Visualizar telas do projeto
                        </a>
                        */}
                    </div>
                </div>
                <div className={styles.photo}>
                    <img src={photo} alt={name}/>
                </div>

                <ProjectModal 
                    isOpen={modalAberto} 
                    onClose={() => setModalAberto(false)} 
                    screenshots={screenshots}
                    projectName={name}
                />
            </Motion.div>
        </div>
    );
}

export default ProjectCard;