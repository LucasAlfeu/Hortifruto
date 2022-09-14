import { ReactComponent as Logo} from 'assets/logo.svg'
import styles from './Cabecalho.module.scss'

export default function Cabecalho(){
    return(
        <header className={styles.cabecalho}>
            <nav className={styles.cabecalho__menu}>
                <article className={styles.cabecalho__container}>
                    <Logo className={styles.cabecalho__imagem} />
                    <h1>HORTIFRUTO</h1>
                </article>
                <ul className={styles.cabecalho__lista}>
                    <li className={styles.cabecalho__item}><p className={styles.cabecalho__link} >Inicio</p></li>
                    <li className={styles.cabecalho__item}><p className={styles.cabecalho__link} >Promoções</p></li>
                    <li className={styles.cabecalho__item}><p className={styles.cabecalho__link} >Carrinho</p></li>
                    <li className={styles.cabecalho__item}><p className={styles.cabecalho__link} >Contato</p></li>
                </ul>
            </nav>
        </header>
    )
}
