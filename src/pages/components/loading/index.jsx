import styles from './loading.module.css'
export function LoadingScreen() {
    return (
        <div className={styles.load_overlay}>
            <div className={styles.spinner}></div>
            <p className={styles.loadtext}>Aguarde, Carregando...</p>
        </div>
    )
}