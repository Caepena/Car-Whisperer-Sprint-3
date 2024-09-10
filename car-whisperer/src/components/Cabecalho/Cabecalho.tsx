import React from "react";
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
                    <li className="link"><a href="../paginas/sobre-nos.html">Sobre nós</a></li>
                    <li className="link"><a href="../paginas/ajuda.html">Ajuda</a></li>
                    <li className="link"><a href="../paginas/chat-online.html">Chat Online</a></li>
                    <li className="link"><a href="../paginas/login.html">Login/Cadastro</a></li>
                </ul>
            </nav>
        </header>
    )
}