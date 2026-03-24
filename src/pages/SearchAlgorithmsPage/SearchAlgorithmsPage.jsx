import Header from "../../components/header/Header"
import styles from "../InformationPage/informationPage.module.scss"

const SearchAlgorithmsPage = () => {
    return (
        <>
            <Header isItLandingPage={false} />
            <main className={styles["page-body"]}>
                <h1 className={styles.title}>MECANISMOS DE PESQUISA</h1>

                <div className={styles.container}>
                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        <h2>CONTEÚDO</h2>
                        <ul>
                            <li>
                                <a href="#topico1">O que são Mecanismos de Pesquisa?</a>
                            </li>
                            <li>
                                <a href="#topico2">Como Funcionam os Mecanismos de Pesquisa?</a>
                            </li>
                            <li>
                                <a href="#topico3">Indexação de Dados</a>
                            </li>
                            <li>
                                <a href="#topico4">Busca por Palavras-chave</a>
                            </li>
                            <li>
                                <a href="#topico5">Busca Semântica</a>
                            </li>
                            <li>
                                <a href="#topico6">Rankeamento de Resultados</a>
                            </li>
                            <li>
                                <a href="#topico7">Processamento de Linguagem Natural</a>
                            </li>
                            <li>
                                <a href="#topico8">Personalização de Resultados</a>
                            </li>
                            <li>
                                <a href="#topico9">Importância dos Mecanismos de Pesquisa</a>
                            </li>
                        </ul>
                    </aside>

                    {/* Content */}
                    <section className={styles.content}>
                        <div className={styles.block}>
                            <h2 id="topico1">O que são Mecanismos de Pesquisa?</h2>
                            <p>
                                Mecanismos de pesquisa são sistemas computacionais projetados para localizar, organizar e apresentar informações relevantes a partir de grandes volumes de dados. Eles são amplamente utilizados na internet, permitindo que usuários encontrem conteúdos específicos por meio de palavras-chave.
                            </p>
                            <br />
                            <p>
                                Esses sistemas funcionam como intermediários entre o usuário e a informação disponível, analisando bilhões de páginas, documentos e dados para entregar resultados em questão de milissegundos.
                            </p>
                            <br />
                            <p>
                                Exemplos comuns incluem buscadores da web, sistemas internos de pesquisa em sites, bancos de dados e até mecanismos utilizados em redes sociais e plataformas de streaming.
                            </p>
                            <br />
                            <p>
                                A eficiência de um mecanismo de pesquisa depende da sua capacidade de entender a intenção do usuário e retornar resultados relevantes, organizados de forma clara e útil.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico2">Como Funcionam os Mecanismos de Pesquisa?</h2>
                            <p>
                                O funcionamento de um mecanismo de pesquisa pode ser dividido em três etapas principais: rastreamento, indexação e recuperação de informações.
                            </p>
                            <br />
                            <p>
                                O rastreamento (crawling) consiste na exploração de conteúdos por meio de robôs automatizados, conhecidos como crawlers ou spiders. Esses robôs percorrem páginas e coletam informações relevantes.
                            </p>
                            <br />
                            <p>
                                A indexação é o processo de organização dessas informações em estruturas eficientes, permitindo que os dados sejam rapidamente acessados posteriormente.
                            </p>
                            <br />
                            <p>
                                Por fim, a recuperação ocorre quando o usuário realiza uma busca. O sistema analisa a consulta, compara com os dados indexados e retorna os resultados mais relevantes.
                            </p>
                            <br />
                            <p>
                                Esse processo acontece em altíssima velocidade, envolvendo algoritmos complexos que priorizam precisão e eficiência.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico3">Indexação de Dados</h2>
                            <p>
                                A indexação é uma das etapas mais importantes de um mecanismo de pesquisa, pois define como as informações serão armazenadas e recuperadas.
                            </p>
                            <br />
                            <p>
                                Durante esse processo, os dados coletados são organizados em estruturas chamadas índices, que funcionam de maneira semelhante ao índice de um livro, permitindo acesso rápido ao conteúdo desejado.
                            </p>
                            <br />
                            <p>
                                Técnicas comuns incluem:
                            </p>
                            <ul>
                                <li>índices invertidos (relacionam palavras aos documentos onde aparecem)</li>
                                <li>armazenamento vetorial para busca semântica</li>
                                <li>compressão de dados para otimização de espaço</li>
                            </ul>
                            <br />
                            <p>
                                Uma boa indexação garante que o sistema seja capaz de responder rapidamente às consultas, mesmo quando lida com milhões ou bilhões de registros.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico4">Busca por Palavras-chave</h2>
                            <p>
                                A busca por palavras-chave é o método mais tradicional utilizado por mecanismos de pesquisa. Nesse modelo, o sistema compara os termos digitados pelo usuário com os termos presentes nos documentos indexados.
                            </p>
                            <br />
                            <p>
                                O objetivo é encontrar correspondências diretas ou aproximadas entre a consulta e os conteúdos disponíveis.
                            </p>
                            <br />
                            <p>
                                Esse tipo de busca pode envolver:
                            </p>
                            <ul>
                                <li>análise de frequência de palavras</li>
                                <li>remoção de palavras irrelevantes (stop words)</li>
                                <li>normalização de termos (como plural e singular)</li>
                            </ul>
                            <br />
                            <p>
                                Apesar de simples, esse método pode apresentar limitações quando a intenção do usuário não está diretamente ligada às palavras utilizadas.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico5">Busca Semântica</h2>
                            <p>
                                A busca semântica vai além da simples correspondência de palavras, focando no significado da consulta do usuário.
                            </p>
                            <br />
                            <p>
                                Nesse modelo, o sistema tenta compreender o contexto e a intenção por trás da pesquisa, utilizando técnicas avançadas de processamento de linguagem natural e aprendizado de máquina.
                            </p>
                            <br />
                            <p>
                                Isso permite que o mecanismo retorne resultados relevantes mesmo quando não há correspondência exata de palavras.
                            </p>
                            <br />
                            <p>
                                Por exemplo, uma busca por "como aprender rápido" pode retornar conteúdos sobre técnicas de estudo, mesmo que essas palavras não estejam explicitamente presentes.
                            </p>
                            <br />
                            <p>
                                A busca semântica é amplamente utilizada em sistemas modernos, especialmente aqueles baseados em inteligência artificial.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico6">Rankeamento de Resultados</h2>
                            <p>
                                Após localizar possíveis resultados, o mecanismo de pesquisa precisa organizá-los em ordem de relevância. Esse processo é conhecido como rankeamento.
                            </p>
                            <br />
                            <p>
                                O rankeamento utiliza diversos critérios para determinar quais resultados devem aparecer primeiro.
                            </p>
                            <br />
                            <p>
                                Alguns fatores comuns incluem:
                            </p>
                            <ul>
                                <li>relevância do conteúdo em relação à busca</li>
                                <li>qualidade e autoridade da fonte</li>
                                <li>popularidade e número de acessos</li>
                                <li>atualização das informações</li>
                            </ul>
                            <br />
                            <p>
                                Esse processo é essencial para garantir que o usuário encontre rapidamente as informações mais úteis.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico7">Processamento de Linguagem Natural</h2>
                            <p>
                                O processamento de linguagem natural (PLN) é uma área da inteligência artificial que permite que máquinas compreendam e interpretem linguagem humana.
                            </p>
                            <br />
                            <p>
                                Nos mecanismos de pesquisa, o PLN é utilizado para analisar consultas, identificar intenções e melhorar a qualidade dos resultados.
                            </p>
                            <br />
                            <p>
                                Técnicas incluem:
                            </p>
                            <ul>
                                <li>análise sintática e semântica</li>
                                <li>reconhecimento de entidades (nomes, lugares, datas)</li>
                                <li>modelos de linguagem baseados em redes neurais</li>
                            </ul>
                            <br />
                            <p>
                                Isso permite que o sistema compreenda perguntas mais complexas e forneça respostas mais precisas.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico8">Personalização de Resultados</h2>
                            <p>
                                Muitos mecanismos de pesquisa modernos utilizam personalização para adaptar os resultados ao perfil do usuário.
                            </p>
                            <br />
                            <p>
                                Isso pode incluir análise de:
                            </p>
                            <ul>
                                <li>histórico de buscas</li>
                                <li>localização geográfica</li>
                                <li>preferências e comportamento</li>
                            </ul>
                            <br />
                            <p>
                                A personalização melhora a relevância dos resultados, mas também levanta questões relacionadas à privacidade e ao viés de informação.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico9">Importância dos Mecanismos de Pesquisa</h2>
                            <p>
                                Os mecanismos de pesquisa são essenciais na era digital, pois permitem acesso rápido e eficiente a grandes quantidades de informação.
                            </p>
                            <br />
                            <p>
                                Eles são utilizados em diversas áreas, como educação, negócios, saúde e entretenimento.
                            </p>
                            <br />
                            <p>
                                Além disso, são fundamentais para o funcionamento da internet moderna, conectando usuários a conteúdos relevantes de forma dinâmica.
                            </p>
                            <br />
                            <p>
                                Com o avanço da inteligência artificial, esses sistemas estão se tornando cada vez mais inteligentes, oferecendo resultados mais precisos e personalizados.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default SearchAlgorithmsPage;