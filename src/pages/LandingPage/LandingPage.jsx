import scrollDownGif from "../../assets/arrowDownGif.gif";
import neuralNetworkImage from "../../assets/neuralNetwork.png";
import brainImage from "../../assets/wiredBrain.png"
import styles from "./landingPage.module.scss";

const LandingPage = () => {
    return (
        <>
            <section className={styles["introduction-section"]}> {/* seção de introdução */}
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
                <div className={styles["left-card-container"]}>
                    <h1 className={styles["card-title"]}>pongpongpong</h1>
                    <p className={styles["card-subtitle"]}>pingpingping</p>
                </div>
                <div className={styles["right-card-container"]}>
                    <img src={neuralNetworkImage} alt="Diagrama de Rede Neural" />
                    <p className={styles["description"]}>blablablabalbalbaablablbalblablablabalbalbaablablbalblablablabalbalbaablablbalblablablabalbalbaablablbal</p>
                </div>
            </section>
            <section className={styles["thanks-section"]}> {/* seção de agradecimentos */}
                <div className={styles["left-card-container"]}>
                    <h1 className={styles["card-title"]}>Agradecimentos especiais</h1>
                    <img src={brainImage} alt="Cérebro pontilhado" />
                </div>
                <div className={styles["right-card-container"]}>
                    <div className={styles["thank-list"]}>
                        <img className={styles["thanklist-item"]}/>
                        <div className={styles["item-name-and-description"]}>
                            <h2 className={styles["item-name"]}>Mondragon</h2>
                            <p className={styles["description"]}>Mondragon</p>
                        </div>
                    </div>
                    <div className={styles["thanksList"]}>
                        <img className={styles["thanklist-item"]}/>
                        <div className={styles["item-name-and-description"]}>
                            <h2 className={styles["item-name"]}>Mondragon</h2>
                            <p className={styles["description"]}>Mondragon</p>
                        </div>
                    </div>
                    <div className={styles["thanksList"]}>
                        <img className={styles["thanklist-item"]}/>
                        <div className={styles["item-name-and-description"]}>
                            <h2 className={styles["item-name"]}>Mondragon</h2>
                            <p className={styles["description"]}>Mondragon</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LandingPage;