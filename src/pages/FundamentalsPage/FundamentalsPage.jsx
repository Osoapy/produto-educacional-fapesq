import Header from "../../components/header/Header"
import styles from "../InformationPage/informationPage.module.scss"

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
                                <a href="#topico3">Inspiração no Cérebro Humano</a>
                            </li>
                            <li>
                                <a href="#topico4">Dados: a base de tudo</a>
                            </li>
                            <li>
                                <a href="#topico5">Algoritmos e Modelos</a>
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
                                <li>reconhecimento de imagens e rostos</li>
                                <li>processamento de linguagem natural</li>
                                <li>previsão de séries temporais</li>
                                <li>sistemas de recomendação</li>
                            </ul>
                            <p>
                                Quanto mais complexa a rede (mais camadas e conexões), maior sua capacidade de resolver problemas sofisticados.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico3">Inspiração no Cérebro Humano</h2>
                            <p>
                                O cérebro humano é composto por bilhões de neurônios interconectados, que se comunicam por meio de impulsos elétricos e químicos. Cada neurônio recebe sinais de outros neurônios, processa essas informações e decide se deve transmitir um novo sinal.
                            </p>
                            <br />
                            <p>
                                As redes neurais artificiais se inspiram nesse funcionamento, mas de forma simplificada e matemática.
                            </p>
                            <br />
                            <p>
                                Um neurônio artificial:
                            </p>
                            <ol>
                                <li>recebe múltiplas entradas</li>
                                <li>aplica pesos a essas entradas</li>
                                <li>soma os valores</li>
                                <li>passa o resultado por uma função de ativação</li>
                                <li>gera uma saída</li>
                            </ol>
                            <br />
                            <p>
                                Essa estrutura permite que a rede aprenda relações complexas entre dados e, embora seja uma simplificação extrema do cérebro humano, esse modelo é suficientemente poderoso para resolver problemas difíceis e identificar padrões que seriam quase impossíveis de detectar manualmente.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico4">Dados: a base de tudo</h2>
                            <p>
                                Dados são o elemento mais importante para qualquer sistema de Inteligência Artificial. Sem dados, não há aprendizado.
                            </p>
                            <br />
                            <p>
                                Os dados fornecem os exemplos necessários para que o modelo identifique padrões e aprenda como resolver um determinado problema. A qualidade, quantidade e diversidade dos dados influenciam diretamente o desempenho da rede neural.
                            </p>
                            <br />
                            <p>
                                Os dados podem assumir diversas formas:
                            </p>
                            <ul>
                                <li>imagens (pixels organizados em matrizes)</li>
                                <li>textos (convertidos em representações numéricas)</li>
                                <li>áudios (transformados em frequências)</li>
                                <li>dados estruturados (tabelas, números, categorias)</li>
                            </ul>
                            <br />
                            <p>
                                Além disso, é essencial que os dados passem por um processo de preparação, que pode incluir:
                            </p>
                            <ul>
                                <li>limpeza (remoção de erros e inconsistências)</li>
                                <li>normalização (padronização dos valores)</li>
                                <li>divisão em conjuntos de treino, validação e teste</li>
                            </ul>
                            <br />
                            <p>
                                Um modelo treinado com dados ruins tende a gerar resultados ruins. Por isso, muitas vezes o maior esforço em projetos de IA está na coleta e tratamento dos dados, e não no modelo em si.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico5">Algoritmos e Modelos</h2>
                            <p>
                                Algoritmos são conjuntos de instruções que definem como um problema será resolvido. No contexto da Inteligência Artificial, eles determinam como os dados serão analisados e como o aprendizado ocorrerá.
                            </p>
                            <br />
                            <p>
                                Já o modelo é o resultado da aplicação desses algoritmos sobre os dados. Ele representa o conhecimento adquirido durante o treinamento.
                            </p>
                            <br />
                            <p>
                                Por exemplo:
                            </p>
                            <ul>
                                <li>o algoritmo define como ajustar os parâmetros</li>
                                <li>o modelo é a rede neural já treinada</li>
                            </ul>
                            <br />
                            <p>
                                Durante o treinamento, o algoritmo ajusta os pesos e vieses do modelo para reduzir erros. Esse processo envolve técnicas matemáticas e estatísticas, como otimização e cálculo de gradientes.
                            </p>
                            <br />
                            <p>
                                Após treinado, o modelo pode ser utilizado para fazer previsões em novos dados, sendo capaz de generalizar o que aprendeu.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default FundamentalsPage;