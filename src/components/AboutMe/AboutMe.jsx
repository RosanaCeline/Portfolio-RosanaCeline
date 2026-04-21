import { motion, useSpring, useMotionValue } from "framer-motion";
import { ClockCheck, CodeXml, SmilePlus } from 'lucide-react';
import Card from '../Card/Card'
import styles from './AboutMe.module.css'

function AboutMe() {
    const Motion = motion;
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const blueX = useSpring(mouseX, { stiffness: 80, damping: 25 });
    const blueY = useSpring(mouseY, { stiffness: 80, damping: 25 });

    const pinkX = useSpring(mouseX, { stiffness: 60, damping: 20 });
    const pinkY = useSpring(mouseY, { stiffness: 60, damping: 20 });

    const handleMouseMove = (e) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <section className={styles.aboutMe} onMouseMove={handleMouseMove}>
            <Motion.div 
                className={`${styles.light} ${styles.cyanLight}`}
                style={{ 
                    x: blueX, 
                    y: blueY, 
                    left: '-30%',
                    translateX: '-80%', 
                    translateY: '-50%',
                    opacity: 0.6 
                }}
            />
            
            <Motion.div 
                className={`${styles.light} ${styles.pinkLight}`}
                style={{ 
                    x: pinkX, 
                    y: pinkY,
                    right: '50%',
                    translateX: '50%',
                    translateY: '-20%',
                    opacity: 0.6
                }}
            />
            <div className={styles.aboutMeSection}>
                <h1 className={styles.title}>{'<Sobre Mim/>'}</h1>

                <div className={styles.aboutMeContainer}>
                    <div className={styles.aboutMeContent}>
                        <p>
                            Estudante de Ciência da Computação e Técnica em Informática, atuando em projetos desde 2024. 
                            Desenvolvo <strong>soluções de alta perfomance</strong> e <strong>interatividade</strong>, priorizando uma <strong>experiência de usuário intuitiva</strong> e <strong>satisfatória</strong>.
                        </p>
                        <p>
                            Meus sites são codificados manualmente, utilizando principalmente <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong> 
                            com <strong>React</strong>, <strong>Java 21</strong> com <strong>Spring Framework</strong> e <strong>PostgreSQL</strong>.
                        </p>
                        <p>
                            Possuo experiência em diferentes etapas do desenvolvimento de software, atuando desde a <strong>elaboração de requisitos</strong> 
                            e <strong>prototipação de interfaces no Figma</strong> até o <strong>desenvolvimento</strong> e <strong>implantação</strong>.
                            Também trabalhei com <strong>testes de aceitação</strong>, utilizando <strong>Robot Framework</strong> para garantir a qualidade das aplicações.
                        </p>
                        
                        <a href="curriculo.pdf" download="Currículo - Rosana Celine.pdf">
                            <button className={styles.button}>{'Currículo (PDF)'}</button>
                        </a>
                    </div>
                    <div className={styles.cards}>
                        <Card icon={CodeXml} title='+2 anos' subtitle='programando'/>
                        <Card icon={ClockCheck} title='Adaptabilidade' subtitle='em ambientes ágeis'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;