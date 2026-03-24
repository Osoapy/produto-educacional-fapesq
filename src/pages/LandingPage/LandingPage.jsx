import scrollDownGif from "../../assets/arrowDownGif.gif";
import neuralNetworkImage from "../../assets/neuralNetwork.png";
import brainImage from "../../assets/wiredBrain.png"
import backgroundImage from "../../assets/neuronBackground.webp";
import mondragonLogo from "../../assets/mondragonLogo.png";
import fapesqLogo from "../../assets/fapesqWhiteLogo.png";
import pbsfLogo from "../../assets/pbsfLogo.png";
import styles from "./landingPage.module.scss";
import Header from "../../components/header/Header";

const LandingPage = () => {
    return (
        <>
            <Header isItLandingPage={true} />
            <section className={styles["introduction-section"]}> {/* seção de introdução */}
                <img className={styles["background-image"]} src={backgroundImage} alt="Fundo de neurônio" />
                <div className={styles["title-and-subtitle"]}>
                    <h1 className={styles["title"]}>Projeto-Neuralize</h1>
                    <h2 className={styles["subtitle"]}>Aprenda sobre Redes Neurais Artificiais</h2>
                </div>
                <div className={styles["scrolldown-container"]}>
                    <p className={styles["subtitle"]}>Scroll para baixo</p>
                    <img className={styles["scrolldown-arrow"]} src={scrollDownGif} alt="Seta para baixo" />
                </div>
            </section>
            <section className={styles["description-section"]}> {/* seção de breve descrição */}
                <img className={styles["background-image"]} src={backgroundImage} alt="Fundo de neurônio" />
                <div className={styles["left-card-container-wrapper"]}>
                    <div className={styles["left-card-container"]}>
                        <h1 className={styles["card-title"]}>O que eu aprendi sobre Redes Neurais</h1>
                        <p className={styles["card-subtitle"]}>na universidade de Mondragon</p>
                    </div>
                </div>
                <div className={styles["right-card-container-wrapper"]}>
                    <div className={styles["right-card-container"]}>
                        <img src={neuralNetworkImage} alt="Diagrama de Rede Neural" />
                        <p className={styles["description"]}>Esse site tem como objetivo ensinar um pouco sobre Redes Neurais Artificiais, como me foi explicado no período de intercâmbio na Espanha, passando dos conceitos mais simples aos mais avançados!</p>
                    </div>
                </div>
            </section>
            <section className={styles["thanks-section"]}> {/* seção de agradecimentos */}
                <img className={styles["background-image"]} src={backgroundImage} alt="Fundo de neurônio" />
                <div className={styles["left-card-container"]}>
                    <h1 className={styles["card-title"]}>Agradecimentos <span className={"underline"}>especiais</span></h1>
                    <img src={brainImage} alt="Cérebro pontilhado" />
                </div>
                <div className={styles["right-card-container"]}>
                    <div className={styles["thank-list"]}>
                        <div className={styles["thanklist-img-wrapper"]}>
                            <img className={styles["thanklist-item"]} src={mondragonLogo} alt="Logo da Mondragon" />
                        </div>
                        <div className={styles["item-name-and-description"]}>
                            <h2 className={styles["item-name"]}>Mondragon</h2>
                            <p className={styles["description"]}>Por ter me recebido de braços abertos e me prover um conhecimento único sobre uma cultura completamente diferente.</p>
                        </div>
                    </div>
                    <div className={styles["thank-list"]}>
                        <div className={styles["thanklist-img-wrapper"]}>
                            <img className={styles["thanklist-item"]} src={pbsfLogo} alt="Logo da PBSF" />
                        </div>
                        <div className={styles["item-name-and-description"]}>
                            <h2 className={styles["item-name"]}>PBSF</h2>
                            <p className={styles["description"]}>Por prezar pela formação profissional de pesquisadores no estado da Paraíba e desempenhar sua função com excelência!</p>
                        </div>
                    </div>
                    <div className={styles["thank-list"]}>
                        <div className={styles["thanklist-img-wrapper"]}>
                            <img className={styles["thanklist-item"]} src={fapesqLogo} alt="Logo da FAPESQ" />
                        </div>
                        <div className={styles["item-name-and-description"]}>
                            <h2 className={styles["item-name"]}>FAPESQ</h2>
                            <p className={styles["description"]}>Por me reconhecer como alguém apto a representar o estado da Paraíba e estar presente em cada pequeno processo desde a aprovação até à volta para o Brasil</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LandingPage;