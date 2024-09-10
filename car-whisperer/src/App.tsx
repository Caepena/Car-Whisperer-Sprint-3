import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Cabecalho from './components/Cabecalho/Cabecalho'
import Conteudo from './components/Conteudo/Conteudo'
import Rodape from './components/Rodape/Rodape'


export default function App() {

  return (
    <div>
      <Outlet/>
      <Cabecalho/>
      <Conteudo/>
      <Rodape/>
    </div>
  )
}
