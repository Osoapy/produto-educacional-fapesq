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
                    <li className={styles.active}>TÓPICO 1</li>
                    <li>TÓPICO 2</li>
                    <li>TÓPICO 3</li>
                    </ul>
                </aside>

                {/* Content */}
                <section className={styles.content}>
                    {[1, 2, 3].map((item) => (
                    <div key={item} className={styles.block}>
                        <h2>Título 1</h2>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s...
                        </p>
                    </div>
                    ))}
                </section>
                </div>
            </main>
        </>
    )
}

export default InformationPage;