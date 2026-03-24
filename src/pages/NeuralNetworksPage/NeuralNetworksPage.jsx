import Header from "../../components/header/Header"
import styles from "../InformationPage/informationPage.module.scss"

const NeuralNetworksPage = () => {
    return (
        <>
            <Header isItLandingPage={false} />
            <main className={styles["page-body"]}>
                <h1 className={styles.title}>REDES NEURAIS</h1>

                <div className={styles.container}>
                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        <h2>CONTEÚDO</h2>
                        <ul>
                            <li>
                                <a href="#topico1">O que são Redes Neurais?</a>
                            </li>
                            <li>
                                <a href="#topico2">Estrutura de uma Rede Neural</a>
                            </li>
                            <li>
                                <a href="#topico3">Neurônio Artificial</a>
                            </li>
                            <li>
                                <a href="#topico4">Pesos e Bias</a>
                            </li>
                            <li>
                                <a href="#topico5">Funções de Ativação</a>
                            </li>
                            <li>
                                <a href="#topico6">Forward Propagation</a>
                            </li>
                            <li>
                                <a href="#topico7">Função de Custo</a>
                            </li>
                            <li>
                                <a href="#topico8">Backpropagation</a>
                            </li>
                            <li>
                                <a href="#topico9">Tipos de Redes Neurais</a>
                            </li>
                            <li>
                                <a href="#topico10">Importância das Redes Neurais</a>
                            </li>
                        </ul>
                    </aside>

                    {/* Content */}
                    <section className={styles.content}>
                        <div className={styles.block}>
                            <h2 id="topico1">O que são Redes Neurais?</h2>
                            <p>
                                Redes Neurais Artificiais são modelos computacionais inspirados no funcionamento do cérebro humano, utilizados para reconhecer padrões, aprender com dados e resolver problemas complexos.
                            </p>
                            <br />
                            <p>
                                Elas são compostas por unidades chamadas neurônios artificiais, organizadas em camadas interconectadas que processam informações de forma distribuída.
                            </p>
                            <br />
                            <p>
                                Cada neurônio recebe entradas, realiza cálculos matemáticos e gera uma saída, que pode ser utilizada por outros neurônios na rede.
                            </p>
                            <br />
                            <p>
                                Esse tipo de estrutura permite que redes neurais aprendam representações complexas de dados, sendo amplamente utilizadas em tarefas como reconhecimento de imagem, linguagem natural e previsão de dados.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico2">Estrutura de uma Rede Neural</h2>
                            <p>
                                Uma rede neural é organizada em camadas, sendo as principais:
                            </p>
                            <ul>
                                <li>camada de entrada</li>
                                <li>camadas ocultas</li>
                                <li>camada de saída</li>
                            </ul>
                            <br />
                            <p>
                                A camada de entrada recebe os dados iniciais. As camadas ocultas realizam transformações matemáticas e extraem padrões. Já a camada de saída fornece o resultado final do modelo.
                            </p>
                            <br />
                            <p>
                                O número de camadas e neurônios influencia diretamente a capacidade da rede de resolver problemas mais complexos.
                            </p>
                            <br />
                            <p>
                                Redes mais profundas, com várias camadas ocultas, são conhecidas como redes neurais profundas (Deep Learning).
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico3">Neurônio Artificial</h2>
                            <p>
                                O neurônio artificial é a unidade básica de uma rede neural. Ele simula, de forma simplificada, o comportamento de um neurônio biológico.
                            </p>
                            <br />
                            <p>
                                Seu funcionamento envolve algumas etapas principais:
                            </p>
                            <ol>
                                <li>receber múltiplas entradas</li>
                                <li>multiplicar cada entrada por um peso</li>
                                <li>somar os valores obtidos</li>
                                <li>adicionar um viés (bias)</li>
                                <li>aplicar uma função de ativação</li>
                            </ol>
                            <br />
                            <p>
                                O resultado final determina se o neurônio será "ativado" e qual será sua saída.
                            </p>
                            <br />
                            <p>
                                Esse processo permite que a rede modele relações não lineares entre os dados.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico4">Pesos e Bias</h2>
                            <p>
                                Os pesos são valores associados às conexões entre neurônios. Eles determinam a importância de cada entrada no cálculo final.
                            </p>
                            <br />
                            <p>
                                Já o bias (viés) é um valor adicional que permite ajustar o resultado da soma, oferecendo mais flexibilidade ao modelo.
                            </p>
                            <br />
                            <p>
                                Durante o treinamento, os pesos e o bias são ajustados automaticamente para reduzir o erro do modelo.
                            </p>
                            <br />
                            <p>
                                Esses parâmetros são fundamentais, pois representam o conhecimento aprendido pela rede neural.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico5">Funções de Ativação</h2>
                            <p>
                                A função de ativação é responsável por introduzir não linearidade na rede neural, permitindo que ela resolva problemas mais complexos.
                            </p>
                            <br />
                            <p>
                                Sem funções de ativação, a rede seria apenas uma combinação linear de valores, limitando sua capacidade de aprendizado.
                            </p>
                            <br />
                            <p>
                                Algumas funções comuns incluem:
                            </p>
                            <ul>
                                <li>ReLU (Rectified Linear Unit)</li>
                                <li>Sigmoid</li>
                                <li>Tanh (Tangente Hiperbólica)</li>
                            </ul>
                            <br />
                            <p>
                                Cada função possui características específicas e é escolhida de acordo com o tipo de problema.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico6">Forward Propagation</h2>
                            <p>
                                Forward propagation é o processo em que os dados passam pela rede neural, da camada de entrada até a camada de saída.
                            </p>
                            <br />
                            <p>
                                Durante esse processo, cada neurônio realiza seus cálculos e transmite o resultado para a próxima camada.
                            </p>
                            <br />
                            <p>
                                O objetivo é gerar uma previsão com base nos dados de entrada e nos parâmetros atuais da rede.
                            </p>
                            <br />
                            <p>
                                Esse é o primeiro passo no funcionamento de uma rede neural durante o treinamento e a inferência.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico7">Função de Custo</h2>
                            <p>
                                A função de custo (ou função de perda) mede o quão distante a previsão do modelo está do valor real.
                            </p>
                            <br />
                            <p>
                                Ela é essencial para orientar o aprendizado, indicando se o modelo está melhorando ou não.
                            </p>
                            <br />
                            <p>
                                Exemplos incluem:
                            </p>
                            <ul>
                                <li>erro quadrático médio (MSE)</li>
                                <li>entropia cruzada</li>
                            </ul>
                            <br />
                            <p>
                                O objetivo do treinamento é minimizar essa função, tornando as previsões cada vez mais precisas.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico8">Backpropagation</h2>
                            <p>
                                Backpropagation é o algoritmo responsável por ajustar os pesos e biases da rede neural.
                            </p>
                            <br />
                            <p>
                                Ele funciona propagando o erro da saída de volta pelas camadas da rede, calculando o quanto cada parâmetro contribuiu para esse erro.
                            </p>
                            <br />
                            <p>
                                Com base nisso, os parâmetros são atualizados para reduzir o erro na próxima iteração.
                            </p>
                            <br />
                            <p>
                                Esse processo é repetido várias vezes até que o modelo atinja um desempenho satisfatório.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico9">Tipos de Redes Neurais</h2>
                            <p>
                                Existem diferentes tipos de redes neurais, cada uma projetada para resolver problemas específicos.
                            </p>
                            <br />
                            <p>
                                Alguns exemplos incluem:
                            </p>
                            <ul>
                                <li>Redes Neurais Feedforward</li>
                                <li>Redes Convolucionais (CNN)</li>
                                <li>Redes Recorrentes (RNN)</li>
                            </ul>
                            <br />
                            <p>
                                Cada tipo possui características próprias e é utilizado em diferentes contextos, como visão computacional, processamento de linguagem e séries temporais.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico10">Importância das Redes Neurais</h2>
                            <p>
                                As redes neurais são uma das tecnologias mais importantes da Inteligência Artificial moderna.
                            </p>
                            <br />
                            <p>
                                Elas permitem resolver problemas complexos que seriam extremamente difíceis de modelar com métodos tradicionais.
                            </p>
                            <br />
                            <p>
                                Atualmente, são utilizadas em diversas áreas, como:
                            </p>
                            <ul>
                                <li>reconhecimento facial</li>
                                <li>assistentes virtuais</li>
                                <li>tradução automática</li>
                                <li>carros autônomos</li>
                            </ul>
                            <br />
                            <p>
                                Com o avanço da tecnologia, as redes neurais continuam evoluindo e desempenhando um papel central na inovação tecnológica.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default NeuralNetworksPage;