import CodeBackground from './CodeBackground/CodeBackgroud'
import Tag from '../Tag/Tag'
import Avatar from '../../assets/avatar.webp'
import styles from './Home.module.css'

function Home() {
    return (
        <section className={styles.home}>
            <CodeBackground/>
            <div className={styles.homeContainer}>
                <div className={styles.homeContent}>
                    <h1>
                        Transformo <span className={styles.title1}>ideias</span> em <span className={styles.title2}>soluções</span> digitais reais
                    </h1>
                    <p>
                        Sou desenvolvedora <strong>full-stack</strong>, focada em <strong>desenvolvimento web</strong>.
                    </p>
                    <p>
                        Desenvolvo projetos completos, desde a <strong>prototipação</strong> até a <strong>hospedagem</strong> de sites. 
                    </p>

                    <div className={styles.tags}>
                        <Tag text='Java' color='#FF4C4C'/>
                        <Tag text='Spring Framework' color='#FF8C42'/>
                        <Tag text='JavaScript' color='#FFCD00'/>
                        <Tag text='React' color='#4CAF50'/>
                        <Tag text='HTML' color='#4D96FF'/>
                        <Tag text='CSS' color='#3A3DFF'/>
                        <Tag text='Python' color='#9D4EDD'/>
                        <Tag text='Django' color='#760CBD'/>
                        <Tag text='Robot Framework' color='#FF66C4'/>
                        <Tag text='Figma' color='#F72585'/>
                    </div>
                </div>
                <div className={styles.homeImage}>
                    <img src={Avatar} alt='Avatar da Rosana' className={styles.avatar}/>
                </div>
            </div>
        </section>
    )
}

export default Home;