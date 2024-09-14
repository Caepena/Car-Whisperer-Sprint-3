import logo from '../../img/porto-seguro-logo.png'
import { Link } from "react-router-dom";

export default function Cabecalho() {
    return(
        <header className="cabecalho">
            <Link to="/">
                <img src={logo} alt="Logo" className="logo" />
            </Link>
            <nav role="navigation">
                <ul>
                    <li className="link"><Link to="/sobre">Sobre</Link></li>
                    <li className="link"><Link to="/ajuda">Ajuda</Link></li>
                    <li className="link"><Link to= "/chat-online">Chat Online</Link></li>
                    <li className="link"><Link to="/login-signin">Login/Cadastro</Link></li>
                </ul>
            </nav>
        </header>
    )
}