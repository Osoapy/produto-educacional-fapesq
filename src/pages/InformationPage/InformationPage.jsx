import Header from "../../components/header/Header"
import styles from "./informationPage.module.scss"

const InformationPage = () => {
    return (
        <>
            <Header />
            <main className={styles["page-body"]}>
                <h1 className={styles.title}>FUNDAMENTOS</h1>

                <div className={styles.container}>
                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        <h2>CONTEÚDO</h2>
                        <ul>
                            <li>
                                <a href="#topico1">TÓPICO 1</a>
                            </li>
                            <li>
                                <a href="#topico2">TÓPICO 2</a>
                            </li>
                            <li>
                                <a href="#topico3">TÓPICO 3</a>
                            </li>
                        </ul>
                    </aside>

                    {/* Content */}
                    <section className={styles.content}>
                        <div className={styles.block}>
                            <h2 id="topico1">Título 1</h2>
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
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 id="topico2">Título 2</h2>
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
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry...
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry...
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry...
                            </p>
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

export default InformationPage;