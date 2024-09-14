import Integrante from "../../components/Integrante/Integrante";

export default function PaginaIntegrantes() {
    document.title = "Pagina dos Integrantes"

    return(
        <div>
            <Integrante
            nome="Marcos Bispo"
            rm="558054"
            turma="1TDSPG"
            github="https://github.com/MarcosBisp"
            foto="..\src\img\Marcos.jpg"/>
        </div>
    )
}