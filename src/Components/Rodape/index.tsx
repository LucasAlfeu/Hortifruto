import styles from './Rodape.module.scss'
import instagram from 'assets/instagram.png'
import whatsapp from 'assets/whatsapp.png'

export default function Rodape(){
    return(
        <footer className={styles.rodape}>
            <h3 className={styles.rodape__titulo}>HORTIFRUTO</h3>
            <figure className={styles.rodape__social}>
                <img className={styles.rodape__instagram} src={instagram} alt="Instagram" />
                <img className={styles.rodape__whatsApp} src={whatsapp} alt="WhatsApp" />
            </figure>
        </footer>
    );
}