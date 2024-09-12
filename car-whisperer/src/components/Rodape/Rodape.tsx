import { Link } from "react-router-dom"


export default function Rodape() {
    return(
        <header className="rodape">
            <nav role="navigation">
                <ul>
                    <li className="item"><Link to={"https://www.portoseguro.com.br/fale-conosco/contatos/telefones-e-sac?_gl=1*hoqak7*_ga*MTg2NDI3OTY3NC4xNzEzNjE1NDYy*_ga_S9FTJ8D526*MTcxNDAxOTU3Mi4yLjEuMTcxNDAxOTY0Ny40NS4wLjA."}>SAC & Telefones</Link></li>
                    <li className="item"><Link to={"https://api.whatsapp.com/send?1=pt_BR&phone=551130039303&text=Oi,%20Porto%20Seguro%20!"}>WhatsApp</Link></li>
                    <li className="item"><Link to={"https://www.portoseguro.com.br/fale-conosco/contatos/enderecos"}>Endereços</Link></li>
                    <li className="item"><Link to={"https://www.portoseguro.com.br/institucional/a-porto-seguro/historia"}>Nossa História</Link></li>
                    <li className="item"><Link to={"https://www.portoseguro.com.br/sustentabilidade"}>Sustentabilidade</Link></li>
                    <li className="item"><Link to={"https://www.portoseguro.com.br/oxigenio-aceleradora"}>Oxigênio Aceleradora</Link></li>
                    <li className="item"><Link to="/pagina-integrantes">Página dos Integrantes</Link></li>
                </ul>
            </nav>
        </header>
    )
}