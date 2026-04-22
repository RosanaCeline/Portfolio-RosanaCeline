import { Mail, ExternalLink } from 'lucide-react';
import styles from './Contact.module.css';


function Contact() {
    return (
        <section className={styles.contact}>
            <div className={styles.contactSection}>
                <h1 className={styles.title}>{'<Contato/>'}</h1>
                <div className={styles.contactContent}>
                    <p>
                        Chegou a hora de contruir seu próximo projeto web.<br/>
                        Vamos trabalhar juntos e entregar sucesso.

                    </p>

                    <ul className={styles.contacts}>
                        <li>
                            <a href='mailto:celinerosana@gmail.com'>
                                <Mail/> celinerosana@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/RosanaCeline' target="_blank" rel="noopener noreferrer">
                                <ExternalLink/> GitHub/RosanaCeline
                            </a>
                        </li>
                        <li>
                            <a href='https://linkedin.com/in/rosana-celine' target="_blank" rel="noopener noreferrer">
                                <ExternalLink/> LinkedIn/RosanaCeline
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contact;