import React from "react";
import { Link } from "react-router-dom";

export default function Rodape() {
    return(
        <header className="rodape">
            <nav role="navigation">
                <ul>
                    <li className="item"><a href="https://www.portoseguro.com.br/fale-conosco/contatos/telefones-e-sac?_gl=1*hoqak7*_ga*MTg2NDI3OTY3NC4xNzEzNjE1NDYy*_ga_S9FTJ8D526*MTcxNDAxOTU3Mi4yLjEuMTcxNDAxOTY0Ny40NS4wLjA.">SAC e Telefones</a></li>
                    <li className="item"><a href="https://api.whatsapp.com/send?1=pt_BR&phone=551130039303&text=Oi,%20Porto%20Seguro%20!">Whatsapp</a></li>
                    <li className="item"><a href="https://www.portoseguro.com.br/fale-conosco/contatos/enderecos">Endereços</a></li>
                    <li className="item"><a href="https://www.portoseguro.com.br/institucional/a-porto-seguro/historia">Nossa História</a></li>
                    <li className="item"><a href="https://www.portoseguro.com.br/sustentabilidade">Sustentabilidade</a></li>
                    <li className="item"><a href="https://www.portoseguro.com.br/oxigenio-aceleradora">Oxigênio Aceleradora</a></li>
                    <li className="item"><a href="./paginas/pagina-integrantes.html">Página Integrantes</a></li>
                </ul>
            </nav>
        </header>
    )
}