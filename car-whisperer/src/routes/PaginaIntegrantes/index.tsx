import Integrante from "../../components/Integrante/Integrante";

export default function PaginaIntegrantes() {
    document.title = "Pagina dos Integrantes"
    

    return(

        <main>
            <a href="https://github.com/Caepena/Car-Whisperer-Sprint-3" className="repositorio">Repositório do GitHub</a>
            <div className="grupo">
                <Integrante
                nome="Marcos Bispo"
                rm="558054"
                turma="1TDSPG"
                github="https://github.com/MarcosBisp"
                foto="..\src\img\Marcos.jpg"/>
            </div>
            <div className="grupo">
                <Integrante
                nome="Caetano Matos Penafiel"
                rm="557984"
                turma="1TDSPG"
                github="https://github.com/Caepena"
                foto="..\src\img\Foto-Caetano.png"/>
            </div>
            <div className="grupo">
                <Integrante
                nome="Marcos Bispo"
                rm="558054"
                turma="1TDSPG"
                github="https://github.com/DGMMX"
                foto="..\src\img\Diego.jpg"/>
            </div>
        </main>
    )
}