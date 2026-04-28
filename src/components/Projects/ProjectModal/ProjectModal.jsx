import styles from './ProjectModal.module.css'

function ProjectModal ({ isOpen, onClose, screenshots, projectName }) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalContainer} onClick={onClose}>
            
            <div 
                style={{ background: 'var(--purple-dark)', padding: '20px', borderRadius: '20px' }}
                onClick={(e) => e.stopPropagation()} // Importante para não fechar ao clicar no modal
            >
                {/* Conteúdo do seu modal */}
                <h2>{projectName}</h2>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
};

export default ProjectModal;