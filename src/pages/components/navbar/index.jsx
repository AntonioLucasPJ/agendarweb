import styles from './navbar.module.css'
import logo from './img/img1.jpg'
import { Link } from 'react-router'
import { useState } from 'react'

export function Navbar() {
    const [user, setuser] = useState('')
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-primary" data-bs-home="dark">
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/appointments'>
                    <img className={styles.navbarlogo} src={logo}></img>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mg-lg-0'>
                        <li className="nav-item">
                            <Link className="nav-link active" to='/appointments'>Home</Link>
                        </li>
                        <li>
                            <Link className="nav-link active" aria-current="page" >Mecanicos</Link>
                        </li>
                    </ul>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <div className="dropdown">
                                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Marcos Augusto
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><Link className="dropdown-item" href="#">Meu Perfil</Link></li>
                                    <li><Link className="dropdown-item" to="/">Desconectar</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

