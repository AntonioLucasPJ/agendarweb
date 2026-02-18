import styles from './Modal.module.css'
export function Modal({ titulo, description, onclick }) {
    return (
        <div className={styles.layout_overlay}>
            <div className={styles.background}>
                <div className={styles.closepopup}>
                    <button className={styles.btn_closepop}
                        onClick={onclick}>X</button>
                </div>
                <div className={styles.modalsucesso}>
                    <h1>{titulo}</h1>
                    <p>{description}</p>
                </div>
                <button
                    className={styles.btn_concluir}
                    onClick={() => console.log('teste')}
                >Return Home</button>
            </div>
        </div>
    )
}
export function ModalDelete({ titulo, description, onclick, ondelete }) {
    return (
        <div className={styles.layout_overlay}>
            <div className={styles.background}>
                <div className={styles.closepopup}>
                    <button className={styles.btn_closepop}
                        onClick={onclick}>X</button>
                </div>
                <div className={styles.modal}>
                    <h1>{titulo}</h1>
                    <p>{description}</p>
                </div>
                <div className={styles.divbtn}>
                    <button
                        className={styles.btn_cancelar}
                        onClick={onclick}
                    >Cancelar</button>
                    <button
                        className={styles.btn_deletar}
                        onClick={ondelete}
                    >Deletar</button>
                </div>
            </div>
        </div>

    )
}