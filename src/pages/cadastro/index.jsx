import styles from './Cadastro.module.css'
import logo from './img/logo02.png';
import img1 from './img/mecanicoslogin.jpg';
import { Navigate, Link } from 'react-router';

export default function Cadastro(){
    return(
        <div className={styles.container}>
            <div className={styles.forminput}>
                <div className={styles.divlogo}>
                    <img src={logo} className={styles.logo}></img>
                </div>     
                <div className={styles.inputdiv}>
                    <h1 className={styles.title}>Cadastro</h1>
                    <input placeholder='Nome'></input>
                    <input placeholder='Email'></input>
                    <input placeholder='Password...'></input>                 
                </div>
                <button className={styles.btn_acess}>Cadastrar</button>
                <p>Já possui uma conta?<Link to='/login'>Clique aqui</Link></p>
            </div>

            <div className={styles.containerimg}>
                <img src={img1} className={styles.imgvisual}></img>
            </div>
        </div>
    )
}
