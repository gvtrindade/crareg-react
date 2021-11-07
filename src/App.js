import React, { useState } from "react";
import Documento from "./componentes/Documento/index"
import CadastroFuncionario from "./componentes/CadastroFuncionario/index";
import CadastroGestor from "./componentes/CadastroGestor/index";
import './estilos/App.css'

export default function App() {

  const [cadastrarFuncionario, setCadastrarFuncionario] = useState({
    numeroMemorando: '"Memorando"',
    dia: '"Dia"',
    mes: '"Mês"',
    ano: '"Ano"',
    funcionarios: '"Funcionari@" : "Nome"',
    vinculado: '"vinculad@"',
    desempenhara: '"desempenhará(o)"',
    localDeTrabalho: '"lugar"',
    assinante: '"Assinante"',
    cargo: '"Cargo"'    
  })

  return (
    <main>
      <div className='botoes' id='botoesCadastro'>
        <CadastroFuncionario text={'Cadastrar Funcionário'} setCadastrarFuncionario={setCadastrarFuncionario} />
        <CadastroGestor text={'Cadastrar Funcionário'} />
      </div>
      <Documento cadastrarFuncionario={cadastrarFuncionario} />
    </main>
  )
}