import styles from './CodeBackground.module.css'

function CodeBackground() {
    return (
        <>
        <div className={styles.codeBackground}>
            {/* JAVA */}
            <div className={styles.codeLine}>public static void main(String[] args) {'{'} System.out.println("Hello World"); {'}'}</div>
            <div className={styles.codeLine}>@RestController @RequestMapping("/api/v1") public class PortfolioController</div>
            <div className={styles.codeLine}>List&lt;String&gt; skills = Arrays.asList("Java", "Spring", "React");</div>
            <div className={styles.codeLine}>Optional&lt;User&gt; user = userRepository.findById(id);</div>
            <div className={styles.codeLine}>public interface UserRepository extends JpaRepository&lt;User, Long&gt; {'{}'}</div>
            <div className={styles.codeLine}>ResponseEntity.ok().body(service.findAll());</div>

            {/* PYTHON */}
            <div className={styles.codeLine}>def get_context_data(self, **kwargs): return super().get_context_data(**kwargs)</div>
            <div className={styles.codeLine}>@login_required def profile(request): return render(request, 'profile.html')</div>
            <div className={styles.codeLine}>print(f"User authenticated: {'{user.is_authenticated}'}")</div>
            <div className={styles.codeLine}>import pandas as pd | df = pd.read_csv('data.csv')</div>

            {/* HTML / REACT */}
            <div className={styles.codeLine}>&lt;section className="container"&gt; &lt;h1&gt;Rosana Celine&lt;/h1&gt; &lt;/section&gt;</div>
            <div className={styles.codeLine}>&lt;input type="email" placeholder="celinerosana@gmail.com.com" required /&gt;</div>
            <div className={styles.codeLine}>const [hamburguerOpen, setHamburguerOpen] = useState(false);</div>
            
            {/* OUTRAS TECHS */}
            <div className={styles.codeLine}>git commit -m "feat: added animated code background"</div>
            <div className={styles.codeLine}>npm install @rosana-celine/portfolio --save-dev</div>
            <div className={styles.codeLine}>docker compose up --build -d database</div>
            <div className={styles.codeLine}>grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));</div>
            
            {/* REPETIÇÃO PARA MAIOR DENSIDADE (OPCIONAL) */}
            <div className={styles.codeLine}>@Autowired private ProductService productService;</div>
            <div className={styles.codeLine}>export default function App() {'{'} return &lt;Header /&gt; {'}'}</div>

            {/* WEB & TOOLS */}
            <div className={styles.codeLine}>box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); backdrop-filter: blur(5px);</div>
            <div className={styles.codeLine}>fetch('https://api.github.com/users/rosanaceline')</div>
            <div className={styles.codeLine}>git push origin main --force-with-lease</div>
            <div className={styles.codeLine}>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</div>
        </div>
        </>
    )
}

export default CodeBackground;