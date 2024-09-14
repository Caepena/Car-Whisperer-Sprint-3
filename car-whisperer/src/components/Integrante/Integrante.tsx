interface IntegranteProps {
    nome: string;
    rm: string;
    turma: string;
    github: string;
    foto: string;
}

export default function Integrante({nome, rm, turma, github, foto}: IntegranteProps) {
    return(
        <div>
            <img src={foto} alt="foto do integrante" />
            <p>Nome: {nome}</p>
            <p>Turma: {turma}</p>
            <p>RM: {rm}</p>
            <p>Link do GitHub: {github}</p>
        </div>
    )
}