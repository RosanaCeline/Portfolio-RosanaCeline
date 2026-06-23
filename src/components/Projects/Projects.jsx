import { useRef } from 'react';
import ProjectCard from './ProjectCard/ProjectCard'
import ProjectModal from './ProjectModal/ProjectModal';
import CoracaoValentePhoto from '../../assets/coracaovalente-screenshot.webp'
import HerTechPhoto from '../../assets/hertech-screenshot.webp'
import BoamentePhoto from '../../assets/boamente-screenshot.webp'
import NossoContarPhoto from '../../assets/nossocontar-screenshot.webp'
import styles from './Projects.module.css'

function Projects() {
    const projetos = [
        {
            name: 'ONG Coração Valente',
            description: 'Site para a ONG Coração Valente. Construído usando React, Spring Boot.',
            photo: CoracaoValentePhoto,
            link: 'https://coracaovalente.ifce.edu.br/',
            status: 'Concluído',
            screenshots: [] // Aqui você passa o array de fotos depois
        },
        {
            name: 'Her Tech Rise',
            description: 'Rede social profissional para mulheres na tecnologia. Construído usando React, Tailwind, Spring Boot.',
            photo: HerTechPhoto,
            link: 'https://cynthiapinheiro.ifce.edu.br/hertechrise/',
            status: 'Concluído',
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
        }
        /*<div>Caso de estudo - robot framework da kabum</div>*/
    ];

    const refs = [useRef(null), useRef(null), useRef(null), useRef(null)]; 
    return (
        <section id="projetos" className={styles.projects}>
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