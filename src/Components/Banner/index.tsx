import styles from './Banner.module.scss'

export default function Banner (){
    return(
        <figure className={styles.banner}>
                <p className={styles.banner__texto}>Frutas frescas para sua mesa</p>
        </figure>
    )
}