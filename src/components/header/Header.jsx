import styles from "./header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <a href="/" className={styles['header-link']}>Neuralize</a>
            <a href="/fundamentos" className={styles['header-link']}>Fundamentos</a>
            <a href="/mecanismos-de-pesquisa" className={styles['header-link']}>Mecanismos de pesquisa</a>
            <a href="/aprendizado-de-maquina" className={styles['header-link']}>Aprendizado de máquina</a>
            <a href="/redes-neurais" className={styles['header-link']}>Redes neurais</a>
            <a href="/treinamento" className={styles['header-link']}>Treinamento</a>
        </header>
    )
}

export default Header;