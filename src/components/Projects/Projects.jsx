import { useRef } from 'react';
import ProjectCard from './ProjectCard/ProjectCard'
import ProjectModal from './ProjectModal/ProjectModal';
import HerTechPhoto from '../../assets/hertech-screenshot.webp'
import BoamentePhoto from '../../assets/boamente-screenshot.webp'
import NossoContarPhoto from '../../assets/nossocontar-screenshot.webp'
import ModellaPhoto from '../../assets/modella-screenshot.webp'
import styles from './Projects.module.css'

function Projects() {
    const projetos = [
        {
            name: 'Her Tech Rise',
            description: 'Rede social profissional para mulheres na tecnologia. Construído usando React, Tailwind, Spring Boot.',
            photo: HerTechPhoto,
            link: 'https://cynthiapinheiro.ifce.edu.br/hertechrise/',
            status: 'Em desenvolvimento',
            screenshots: [] // Aqui você passa o array de fotos depois
        },
        {
            name: 'Nosso Contar',
            description: 'Site para alfabetização de crianças surdas. Criado com React e Tailwind.',
            photo: NossoContarPhoto,
            link: 'https://nosso-contar.vercel.app/',
            status: 'Concluído',
            screenshots: []
        },
        {
            name: 'Boamente',
            description: 'Ferramenta de apoio para profissionais de saúde mental no monitoramento remoto dos níveis de ideação suicida.',
            photo: BoamentePhoto,
            link: 'https://boamente-frontend.vercel.app/',
            status: 'Concluído',
            screenshots: []
        },
        {
            name: 'Modella Clothing Store',
            description: 'Interface para loja de roupas femininas. Criado para estudo e feito usando JavaScript e React.',
            photo: ModellaPhoto,
            link: 'https://clothing-store-delta-rust.vercel.app/',
            status: 'Estudo',
            screenshots: []
        }
        /*<ProjectCard
            name='ONG Coração Valente'
            description=''
            photo=''
            link='Link para prototipo'
            screenshots='{}'
        />*/
        /*<div>Caso de estudo - robot framework da kabum</div>*/
    ];

    const refs = [useRef(null), useRef(null), useRef(null), useRef(null)]; 
    return (
        <section className={styles.projects}>
            <div className={styles.projectsSection}>
                <h1 className={styles.title}>{'<Projetos/>'}</h1>
                <div className={styles.cards}>
                    {projetos.map((projeto, i) => (
                        <ProjectCard 
                            key={i}
                            index={i} 
                            total={projetos.length}
                            cardRef={refs[i]}
                            nextCardRef={refs[i + 1]}
                            {...projeto} 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;