import React from 'react';
import { motion } from 'framer-motion';
import styles from './CodeBackground.module.css';

const codeSnippets = [
    "public static void main(String[] args) { System.out.println('Hello World'); }",
    "@RestController @RequestMapping('/api/v1') public class PortfolioController",
    "List<String> skills = Arrays.asList('Java', 'Spring', 'React');",
    "Optional<User> user = userRepository.findById(id);",
    "public interface UserRepository extends JpaRepository<User, Long> {}",
    "ResponseEntity.ok().body(service.findAll());",
    "def get_context_data(self, **kwargs): return super().get_context_data(**kwargs)",
    "@login_required def profile(request): return render(request, 'profile.html')",
    "print(f'User authenticated: {user.is_authenticated}')",
    "import pandas as pd | df = pd.read_csv('data.csv')",
    "<section className='container'> <h1>Rosana Celine</h1> </section>",
    "const [hamburguerOpen, setHamburguerOpen] = useState(false);",
    "git commit -m 'feat: added animated code background'",
    "npm install @rosana-celine/portfolio --save-dev",
    "docker compose up --build -d database",
    "grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));",
    "@Autowired private ProductService productService;",
    "export default function App() { return <Header /> }",
    "box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); backdrop-filter: blur(5px);",
    "fetch('https://api.github.com/users/rosanaceline')",
    "git push origin main --force-with-lease",
    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"
];

const CodeBackground = () => {
    const Motion = motion;
    return (
        <div className={styles.codeBackground}>
        <Motion.div
            className={styles.aurora}
            animate={{
            x: [-30, 30, -30],
            y: [0, -40, 0],
            }}
            transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            }}
        />

        {codeSnippets.map((snippet, index) => {
            const isEven = index % 2 === 0;
            const duration = 15 + (index % 10);
            
            return (
            <Motion.div
                key={index}
                className={styles.codeLine}
                initial={{ x: isEven ? "-100%" : "100%" }}
                animate={{ x: isEven ? "100%" : "-100%" }}
                transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: -(index * 1.5),
                }}
                style={{
                opacity: index < 8 ? 0.08 : index < 16 ? 0.12 : 0.18,
                fontSize: `${1 + (index % 3) * 0.1}rem`,
                color: `var(--color-code-${(index % 5) + 1})`
                }}
            >
                {snippet}
            </Motion.div>
            );
        })}
        </div>
    );
};

export default CodeBackground;