import styles from './login.module.css'
import logo from './img/logo02.png';
import img1 from './img/mecanicoslogin.jpg';
import { Link, Navigate, useNavigate } from 'react-router';
import { api } from '../../service/api';
import { useState } from 'react';
export default function Login() {
    const navegar = useNavigate()
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    async function LoadLogin(){
        navegar('/appointments')
    }
    return (
        <div className={styles.container}>
            <div className={styles.forminput}>
                <div className={styles.divlogo}>
                    <img src={logo} className={styles.logo}></img>
                </div>     
                <div className={styles.inputdiv}>
                    <h1 className={styles.title}>Login</h1>
                    <input placeholder='User....' onChange={(e)=> setemail(e.target.value)}></input>
                    <input placeholder='Password...' onChange={(e)=>setpassword(e.target.value)}></input>                 
                </div>
                <button onClick={LoadLogin} className={styles.btn_acess}>Acessar</button>
                <p>Não tem conta? <Link to='/singup'>Criar conta agora.</Link></p>
            </div>

            <div className={styles.containerimg}>
                <img src={img1} className={styles.imgvisual}></img>
            </div>
        </div>
    )
}
