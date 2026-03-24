import Header from "../../components/header/Header"
import styles from "./fundamentalsPage.module.scss"

const FundamentalsPage = () => {
    return (
        <>
            <Header isItLandingPage={false} />
            <main className={styles["page-body"]}>
                <h1 className={styles.title}>FUNDAMENTOS</h1>

                <div className={styles.container}>
                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        <h2>CONTEÚDO</h2>
                        <ul>
                            <li>
                                <a href="#topico1">O que é Inteligência Artificial?</a>
                            </li>
                            <li>
                                <a href="#topico2">O que são Redes Neurais Artificiais?</a>
                            </li>
                            <li>
                                <a href="#topico3">TÓPICO 3</a>
                            </li>
                        </ul>
                    </aside>

                    {/* Content */}
                    <section className={styles.content}>
                        <div className={styles.block}>
                            <h2 id="topico1">O que é Inteligência Artificial?</h2>
                            <p>
                                Inteligência Artificial (IA) é um ramo da ciência da computação dedicado ao desenvolvimento de sistemas capazes de simular aspectos da inteligência humana. Isso inclui habilidades como raciocínio lógico, aprendizado, reconhecimento de padrões, interpretação de linguagem natural e tomada de decisão.
                            </p>
                            <br />
                            <p>
                                Ao contrário de softwares tradicionais, que seguem instruções fixas, sistemas de IA são projetados para se adaptar com base em dados. Eles analisam grandes volumes de informação, identificam padrões ocultos e utilizam esses padrões para prever resultados ou tomar decisões de forma autônoma.
                            </p>
                            <br />
                            <p>
                                A IA está presente em diversas tecnologias modernas, como assistentes virtuais, sistemas de recomendação, diagnósticos médicos assistidos por máquina e veículos autônomos. Seu crescimento está diretamente ligado ao aumento da capacidade computacional e à disponibilidade de grandes conjuntos de dados.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico2">O que são Redes Neurais Artificiais?</h2>
                            <p>
                                Redes Neurais Artificiais (RNAs) são modelos matemáticos inspirados no funcionamento do cérebro humano, projetados para reconhecer padrões complexos em dados.
                            </p>
                            <br />
                            <p>
                                Essas redes são compostas por unidades chamadas neurônios artificiais, organizadas em camadas: camada de entrada, camadas ocultas e camada de saída. Cada neurônio recebe informações, aplica operações matemáticas e transmite o resultado para os próximos neurônios.
                            </p>
                            <br />
                            <p>
                                As redes neurais são amplamente utilizadas em tarefas como:
                            </p>
                            <ul>
                                <li>Coffee</li>
                                <li>Tea</li>
                                <li>Milk</li>
                            </ul>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico3">Título 3</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry...
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry...
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry...
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry...
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry...
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry...
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry...
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry...
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default FundamentalsPage;