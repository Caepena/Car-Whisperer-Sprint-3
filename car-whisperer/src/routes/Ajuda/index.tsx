

export default function Ajuda() {
    document.title = "Ajuda"
    
    return(
        <div>
            <main>
                <div className="retangulo" role="help">
                    <h3>Como podemos lhe ajudar?</h3>
                        <nav>
                            <div className="container">
                                <ul className="lista">
                                    <li className="link"><a href="https://api.whatsapp.com/send?1=pt_BR&phone=551130039303&text=Oi,%20vim%20do%20Canal%20de%20Ajuda%20do%20site%20da%20Porto,%20gostaria%20de%20solicitar%20socorro">Solicitar socorro</a></li>
                                    <li className="link"><a href="https://www.portoseguro.com.br/atendimento/sinistros">Realizar aviso de Sinistro</a></li>
                                    <li className="link"><a href="https://www.portoseguro.com.br/porto-seguro-saude/rede-referenciada-odonto">Consultar rede referenciada Odonto</a></li>
                                    <li className="link"><a href="https://www.portoseguro.com.br/porto-seguro-saude/rede-referenciada">Consultar Rede referenciada Porto Med</a></li>
                                    <li className="link"><a href="https://www.portoseguro.com.br/atendimento/acesso-rapido/Grupo-Acesso-Rapido/portomed%E2%80%93operadora?cmph=113&ref=siteporto">Acessar Portomed Operadora</a></li>
                                    <li className="link"><a href="https://www.portoseguro.com.br/faqs/dados-de-acesso">Editar dados pessoais de acesso</a></li>
                                </ul>
                                <ul className="lista">
                                    <li className="link"><a href="https://www.portoseguro.com.br/quero-pagar?cmph=113&ref=siteporto&cmph=113&ref=siteporto">Acessar 2 via do boleto</a></li>
                                    <li className="link"><a href="https://www.portoseguro.com.br/faqs/apolices-de-seguros">Consultar apólices de seguros</a></li>
                                    <li className="link"><a href="https://www.portoseguro.com.br/faqs/solicitacao-de-reembolso">Solicitar reembolso</a></li>
                                    <li className="link"><a href="https://www.portoseguro.com.br/faqs/informe-de-rendimento">Acessar informe de rendimentos</a></li>
                                    <li className="link"><a href="https://www.portoseguro.com.br/app-porto-download">App Porto</a></li>
                                    <li className="link"><a href="https://www.portoseguro.com.br/negocie">Renegociação</a></li>
                                </ul>
                            </div>
                        </nav>
                </div>
            </main>
        </div>
    )
}