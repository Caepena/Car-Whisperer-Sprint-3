import logo from '../../img/porto-seguro-logo.png'
import { Link } from "react-router-dom";
import style from './Cabecalho.module.css'

export default function Cabecalho() {
    return(
        <header className={style.cabecalho}>
            <Link to="/">
                <img src={logo} alt="Logo" className={style.logo} />
            </Link>
            <nav role="navigation">
                <ul>
                    <li className={style.link}><Link to="/sobre">Sobre</Link></li>
                    <li className={style.link}><Link to="/ajuda">Ajuda</Link></li>
                    <li className={style.link}><Link to= "/chat-online">Chat Online</Link></li>
                    <li className={style.link}><Link to="/login-signin">Login/Cadastro</Link></li>
                </ul>
            </nav>
        </header>
    )
}