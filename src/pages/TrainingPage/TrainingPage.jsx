import Header from "../../components/header/Header"
import styles from "../InformationPage/informationPage.module.scss"

const TrainingPage = () => {
    return (
        <>
            <Header isItLandingPage={false} />
            <main className={styles["page-body"]}>
                <h1 className={styles.title}>TREINAMENTO</h1>

                <div className={styles.container}>
                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        <h2>CONTEÚDO</h2>
                        <ul>
                            <li>
                                <a href="#topico1">O que é Treinamento em Redes Neurais?</a>
                            </li>
                            <li>
                                <a href="#topico2">Etapas do Treinamento</a>
                            </li>
                            <li>
                                <a href="#topico3">Função de Perda</a>
                            </li>
                            <li>
                                <a href="#topico4">Gradiente e Otimização</a>
                            </li>
                            <li>
                                <a href="#topico5">Taxa de Aprendizado</a>
                            </li>
                            <li>
                                <a href="#topico6">Épocas e Batch Size</a>
                            </li>
                            <li>
                                <a href="#topico7">Overfitting e Regularização</a>
                            </li>
                            <li>
                                <a href="#topico8">Validação do Modelo</a>
                            </li>
                            <li>
                                <a href="#topico9">Convergência do Modelo</a>
                            </li>
                            <li>
                                <a href="#topico10">Importância do Treinamento</a>
                            </li>
                        </ul>
                    </aside>

                    {/* Content */}
                    <section className={styles.content}>
                        <div className={styles.block}>
                            <h2 id="topico1">O que é Treinamento em Redes Neurais?</h2>
                            <p>
                                O treinamento é o processo pelo qual uma rede neural aprende a partir de dados. Durante esse processo, o modelo ajusta seus parâmetros internos, como pesos e bias, com o objetivo de melhorar suas previsões.
                            </p>
                            <br />
                            <p>
                                Inicialmente, os parâmetros da rede são definidos de forma aleatória. Ao longo do treinamento, esses valores são modificados com base nos erros cometidos pelo modelo.
                            </p>
                            <br />
                            <p>
                                O objetivo principal do treinamento é minimizar a diferença entre as previsões do modelo e os valores reais, tornando-o cada vez mais preciso.
                            </p>
                            <br />
                            <p>
                                Esse processo é repetido várias vezes até que o modelo alcance um desempenho satisfatório.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico2">Etapas do Treinamento</h2>
                            <p>
                                O treinamento de uma rede neural segue um ciclo contínuo de etapas que se repetem diversas vezes.
                            </p>
                            <br />
                            <p>
                                As principais etapas incluem:
                            </p>
                            <ol>
                                <li>entrada de dados na rede</li>
                                <li>propagação para frente (forward propagation)</li>
                                <li>cálculo da função de custo</li>
                                <li>propagação do erro (backpropagation)</li>
                                <li>atualização dos parâmetros</li>
                            </ol>
                            <br />
                            <p>
                                Esse ciclo permite que a rede aprenda progressivamente, ajustando seus parâmetros a cada iteração.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico3">Função de Perda</h2>
                            <p>
                                A função de perda é responsável por medir o erro do modelo durante o treinamento.
                            </p>
                            <br />
                            <p>
                                Ela compara a saída prevista pela rede com o valor real esperado, indicando o quão distante o modelo está do resultado correto.
                            </p>
                            <br />
                            <p>
                                Quanto menor o valor da função de perda, melhor o desempenho do modelo.
                            </p>
                            <br />
                            <p>
                                Exemplos comuns incluem erro quadrático médio e entropia cruzada.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico4">Gradiente e Otimização</h2>
                            <p>
                                O gradiente indica a direção e a intensidade com que os parâmetros da rede devem ser ajustados para reduzir o erro.
                            </p>
                            <br />
                            <p>
                                Com base no gradiente, algoritmos de otimização atualizam os pesos e bias da rede.
                            </p>
                            <br />
                            <p>
                                O método mais comum é o gradiente descendente, que ajusta os parâmetros na direção que reduz a função de perda.
                            </p>
                            <br />
                            <p>
                                Existem variações desse método, como:
                            </p>
                            <ul>
                                <li>Gradiente Descendente Estocástico (SGD)</li>
                                <li>Adam</li>
                                <li>RMSprop</li>
                            </ul>
                            <br />
                            <p>
                                Esses algoritmos ajudam a tornar o treinamento mais eficiente e estável.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico5">Taxa de Aprendizado</h2>
                            <p>
                                A taxa de aprendizado (learning rate) define o tamanho dos passos dados na atualização dos parâmetros da rede.
                            </p>
                            <br />
                            <p>
                                Se a taxa for muito alta, o modelo pode não convergir e apresentar instabilidade. Se for muito baixa, o treinamento pode se tornar lento e ineficiente.
                            </p>
                            <br />
                            <p>
                                Escolher uma taxa de aprendizado adequada é fundamental para o sucesso do treinamento.
                            </p>
                            <br />
                            <p>
                                Em muitos casos, técnicas como ajuste dinâmico da taxa de aprendizado são utilizadas para melhorar o desempenho.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico6">Épocas e Batch Size</h2>
                            <p>
                                Durante o treinamento, os dados são processados em ciclos chamados épocas.
                            </p>
                            <br />
                            <p>
                                Uma época corresponde a uma passagem completa por todo o conjunto de dados de treino.
                            </p>
                            <br />
                            <p>
                                Já o batch size define quantas amostras são processadas antes de atualizar os parâmetros.
                            </p>
                            <br />
                            <p>
                                Tipos comuns incluem:
                            </p>
                            <ul>
                                <li>batch completo (todos os dados de uma vez)</li>
                                <li>mini-batch (pequenos grupos de dados)</li>
                                <li>stochastic (uma amostra por vez)</li>
                            </ul>
                            <br />
                            <p>
                                O uso de mini-batches é o mais comum, pois equilibra desempenho e eficiência.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico7">Overfitting e Regularização</h2>
                            <p>
                                Durante o treinamento, o modelo pode aprender excessivamente os dados de treino, incluindo ruídos. Esse problema é conhecido como overfitting.
                            </p>
                            <br />
                            <p>
                                Para evitar isso, são utilizadas técnicas de regularização, que ajudam o modelo a generalizar melhor.
                            </p>
                            <br />
                            <p>
                                Algumas técnicas incluem:
                            </p>
                            <ul>
                                <li>Dropout (desativação aleatória de neurônios)</li>
                                <li>Regularização L1 e L2</li>
                                <li>Early stopping (interrupção antecipada do treinamento)</li>
                            </ul>
                            <br />
                            <p>
                                Essas abordagens ajudam a evitar que o modelo se torne excessivamente dependente dos dados de treino.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico8">Validação do Modelo</h2>
                            <p>
                                A validação é o processo de avaliar o desempenho do modelo durante o treinamento.
                            </p>
                            <br />
                            <p>
                                Um conjunto de validação é utilizado para verificar se o modelo está generalizando bem para dados novos.
                            </p>
                            <br />
                            <p>
                                Isso permite ajustar hiperparâmetros e identificar problemas como overfitting antes da finalização do treinamento.
                            </p>
                            <br />
                            <p>
                                A validação é essencial para garantir a qualidade do modelo final.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico9">Convergência do Modelo</h2>
                            <p>
                                A convergência ocorre quando o modelo atinge um estado em que a função de perda não diminui significativamente com novas iterações.
                            </p>
                            <br />
                            <p>
                                Nesse ponto, o modelo já aprendeu o máximo possível com os dados disponíveis.
                            </p>
                            <br />
                            <p>
                                Identificar a convergência é importante para evitar desperdício de recursos computacionais.
                            </p>
                            <br />
                            <p>
                                Técnicas como early stopping ajudam a interromper o treinamento no momento adequado.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico10">Importância do Treinamento</h2>
                            <p>
                                O treinamento é uma das etapas mais importantes no desenvolvimento de redes neurais.
                            </p>
                            <br />
                            <p>
                                É nesse processo que o modelo adquire conhecimento e se torna capaz de resolver problemas reais.
                            </p>
                            <br />
                            <p>
                                Um treinamento bem executado resulta em modelos mais precisos, eficientes e confiáveis.
                            </p>
                            <br />
                            <p>
                                Por outro lado, falhas no treinamento podem comprometer completamente o desempenho do sistema.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default TrainingPage;