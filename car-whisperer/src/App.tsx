import { Outlet } from 'react-router-dom'
import Cabecalho from './components/Cabecalho/Cabecalho'
import Rodape from './components/Rodape/Rodape'
import './App.css'


export default function App() {
  document.title = "Página Inicial"


  return (
    <div className='app-container'>
      <Cabecalho/>
      <main className='conteudo'>
        <div role='contentInfo'>
      <Outlet/>
        </div>
      </main>
      <Rodape/>
    </div>
  )
}
