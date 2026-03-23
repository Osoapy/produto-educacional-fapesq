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
                        <h1 className={styles["card-title"]}>pongpongpong pongpong pong</h1>
                        <p className={styles["card-subtitle"]}>pingpingping ping ping</p>
                    </div>
                </div>
                <div className={styles["right-card-container-wrapper"]}>
                    <div className={styles["right-card-container"]}>
                        <img src={neuralNetworkImage} alt="Diagrama de Rede Neural" />
                        <p className={styles["description"]}>blablablab albalbaablablba lblablablaba lbalbaablablbalblablablabalbal baablablbalblablablabal balbaabl ablbal</p>
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
                            <p className={styles["description"]}>O papel dos pais no tratamento pediátrico O papel dos pais no tratamento pediátrico </p>
                        </div>
                    </div>
                    <div className={styles["thank-list"]}>
                        <div className={styles["thanklist-img-wrapper"]}>
                            <img className={styles["thanklist-item"]} src={pbsfLogo} alt="Logo da PBSF" />
                        </div>
                        <div className={styles["item-name-and-description"]}>
                            <h2 className={styles["item-name"]}>PBSF</h2>
                            <p className={styles["description"]}>O papel dos pais no tratamento pediátrico O papel dos pais no tratamento pediátrico </p>
                        </div>
                    </div>
                    <div className={styles["thank-list"]}>
                        <div className={styles["thanklist-img-wrapper"]}>
                            <img className={styles["thanklist-item"]} src={fapesqLogo} alt="Logo da FAPESQ" />
                        </div>
                        <div className={styles["item-name-and-description"]}>
                            <h2 className={styles["item-name"]}>FAPESQ</h2>
                            <p className={styles["description"]}>O papel dos pais no tratamento pediátrico O papel dos pais no tratamento pediátrico </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LandingPage;