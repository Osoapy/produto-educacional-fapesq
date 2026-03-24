import Header from "../../components/header/Header"
import styles from "../InformationPage/informationPage.module.scss"

const MachineLearningPage = () => {
    return (
        <>
            <Header isItLandingPage={false} />
            <main className={styles["page-body"]}>
                <h1 className={styles.title}>APRENDIZADOS DE MÁQUINA</h1>

                <div className={styles.container}>
                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        <h2>CONTEÚDO</h2>
                        <ul>
                            <li>
                                <a href="#topico1">O que é Aprendizado de Máquina?</a>
                            </li>
                            <li>
                                <a href="#topico2">Como o Aprendizado de Máquina Funciona?</a>
                            </li>
                            <li>
                                <a href="#topico3">Tipos de Aprendizado</a>
                            </li>
                            <li>
                                <a href="#topico4">Aprendizado Supervisionado</a>
                            </li>
                            <li>
                                <a href="#topico5">Aprendizado Não Supervisionado</a>
                            </li>
                            <li>
                                <a href="#topico6">Aprendizado por Reforço</a>
                            </li>
                            <li>
                                <a href="#topico7">Treinamento e Teste</a>
                            </li>
                            <li>
                                <a href="#topico8">Métricas de Avaliação</a>
                            </li>
                            <li>
                                <a href="#topico9">Aplicações do Aprendizado de Máquina</a>
                            </li>
                            <li>
                                <a href="#topico10">Desafios do Aprendizado de Máquina</a>
                            </li>
                        </ul>
                    </aside>

                    {/* Content */}
                    <section className={styles.content}>
                        <div className={styles.block}>
                            <h2 id="topico1">O que é Aprendizado de Máquina?</h2>
                            <p>
                                Aprendizado de Máquina (Machine Learning) é uma área da Inteligência Artificial que permite que sistemas aprendam automaticamente a partir de dados, sem a necessidade de serem explicitamente programados para cada tarefa.
                            </p>
                            <br />
                            <p>
                                Em vez de seguir regras fixas, os modelos de aprendizado de máquina identificam padrões em dados e utilizam esses padrões para fazer previsões ou tomar decisões.
                            </p>
                            <br />
                            <p>
                                Esse tipo de abordagem é especialmente útil em problemas onde é difícil definir regras claras, como reconhecimento de imagens, previsão de comportamento ou análise de linguagem.
                            </p>
                            <br />
                            <p>
                                Com o crescimento da quantidade de dados disponíveis e do poder computacional, o aprendizado de máquina se tornou uma das tecnologias mais importantes da atualidade.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico2">Como o Aprendizado de Máquina Funciona?</h2>
                            <p>
                                O funcionamento do aprendizado de máquina envolve a criação de modelos que aprendem padrões a partir de dados de entrada.
                            </p>
                            <br />
                            <p>
                                Inicialmente, o modelo recebe um conjunto de dados (dataset), que pode conter exemplos e, em alguns casos, respostas esperadas. A partir desses dados, o modelo ajusta seus parâmetros internos para minimizar erros.
                            </p>
                            <br />
                            <p>
                                Esse processo de ajuste é chamado de treinamento. Durante o treinamento, o modelo realiza previsões, compara com os resultados reais e corrige seus erros continuamente.
                            </p>
                            <br />
                            <p>
                                Após o treinamento, o modelo pode ser utilizado para fazer previsões em novos dados, sendo capaz de generalizar o conhecimento adquirido.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico3">Tipos de Aprendizado</h2>
                            <p>
                                Existem diferentes formas de aprendizado de máquina, que variam de acordo com o tipo de dados e o objetivo do modelo.
                            </p>
                            <br />
                            <p>
                                Os principais tipos são:
                            </p>
                            <ul>
                                <li>aprendizado supervisionado</li>
                                <li>aprendizado não supervisionado</li>
                                <li>aprendizado por reforço</li>
                            </ul>
                            <br />
                            <p>
                                Cada abordagem possui características específicas e é utilizada em diferentes tipos de problemas.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico4">Aprendizado Supervisionado</h2>
                            <p>
                                No aprendizado supervisionado, o modelo é treinado com dados rotulados, ou seja, cada exemplo possui uma resposta correta associada.
                            </p>
                            <br />
                            <p>
                                O objetivo é aprender uma função que relacione entradas e saídas, permitindo prever resultados para novos dados.
                            </p>
                            <br />
                            <p>
                                Esse tipo de aprendizado é amplamente utilizado em tarefas como:
                            </p>
                            <ul>
                                <li>classificação (ex: identificar se um e-mail é spam)</li>
                                <li>regressão (ex: prever o preço de um produto)</li>
                            </ul>
                            <br />
                            <p>
                                Durante o treinamento, o modelo compara suas previsões com os valores reais e ajusta seus parâmetros para reduzir o erro.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico5">Aprendizado Não Supervisionado</h2>
                            <p>
                                No aprendizado não supervisionado, os dados não possuem rótulos. O modelo precisa identificar padrões e estruturas por conta própria.
                            </p>
                            <br />
                            <p>
                                Esse tipo de aprendizado é utilizado para explorar dados e descobrir relações ocultas entre eles.
                            </p>
                            <br />
                            <p>
                                Exemplos incluem:
                            </p>
                            <ul>
                                <li>agrupamento de dados (clustering)</li>
                                <li>redução de dimensionalidade</li>
                            </ul>
                            <br />
                            <p>
                                É especialmente útil quando não há conhecimento prévio sobre os dados ou quando não existem respostas definidas.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico6">Aprendizado por Reforço</h2>
                            <p>
                                No aprendizado por reforço, o modelo aprende através da interação com um ambiente.
                            </p>
                            <br />
                            <p>
                                Ele realiza ações e recebe recompensas ou penalidades com base nos resultados dessas ações.
                            </p>
                            <br />
                            <p>
                                Com o tempo, o modelo aprende quais ações maximizam a recompensa acumulada.
                            </p>
                            <br />
                            <p>
                                Esse tipo de aprendizado é utilizado em:
                            </p>
                            <ul>
                                <li>jogos (como xadrez e videogames)</li>
                                <li>robótica</li>
                                <li>sistemas autônomos</li>
                            </ul>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico7">Treinamento e Teste</h2>
                            <p>
                                Para garantir que um modelo funcione corretamente, os dados são geralmente divididos em diferentes conjuntos: treino, validação e teste.
                            </p>
                            <br />
                            <p>
                                O conjunto de treino é utilizado para ensinar o modelo. O conjunto de validação ajuda a ajustar parâmetros e evitar problemas como overfitting.
                            </p>
                            <br />
                            <p>
                                Já o conjunto de teste é utilizado para avaliar o desempenho final do modelo em dados que ele nunca viu.
                            </p>
                            <br />
                            <p>
                                Essa separação é essencial para garantir que o modelo seja capaz de generalizar bem.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico8">Métricas de Avaliação</h2>
                            <p>
                                Para medir o desempenho de um modelo de aprendizado de máquina, são utilizadas métricas específicas.
                            </p>
                            <br />
                            <p>
                                Algumas das principais métricas incluem:
                            </p>
                            <ul>
                                <li>acurácia (porcentagem de acertos)</li>
                                <li>precisão (quantidade de acertos entre as previsões positivas)</li>
                                <li>recall (capacidade de encontrar todos os casos positivos)</li>
                                <li>erro médio (diferença entre valores previstos e reais)</li>
                            </ul>
                            <br />
                            <p>
                                A escolha da métrica depende do tipo de problema e do objetivo do modelo.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico9">Aplicações do Aprendizado de Máquina</h2>
                            <p>
                                O aprendizado de máquina é utilizado em diversas áreas e aplicações do dia a dia.
                            </p>
                            <br />
                            <p>
                                Exemplos incluem:
                            </p>
                            <ul>
                                <li>sistemas de recomendação (filmes, músicas, produtos)</li>
                                <li>detecção de fraudes</li>
                                <li>diagnóstico médico</li>
                                <li>assistentes virtuais</li>
                                <li>análise de dados e previsão de tendências</li>
                            </ul>
                            <br />
                            <p>
                                Essas aplicações mostram como o aprendizado de máquina está cada vez mais presente na sociedade moderna.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico10">Desafios do Aprendizado de Máquina</h2>
                            <p>
                                Apesar de seu potencial, o aprendizado de máquina enfrenta diversos desafios.
                            </p>
                            <br />
                            <p>
                                Entre os principais estão:
                            </p>
                            <ul>
                                <li>necessidade de grandes volumes de dados</li>
                                <li>qualidade e viés nos dados</li>
                                <li>alto custo computacional</li>
                                <li>dificuldade de interpretação dos modelos</li>
                            </ul>
                            <br />
                            <p>
                                Superar esses desafios é essencial para garantir o uso responsável e eficiente dessa tecnologia.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default MachineLearningPage;