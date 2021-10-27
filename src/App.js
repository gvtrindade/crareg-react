import React, { useState } from "react";
import Documento from "./componentes/Documento"
import CadastroFuncionario from "./componentes/CadastroFuncionario";
import CadastroGestor from "./componentes/CadastroGestor";


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
        <CadastroFuncionario text={'Cadastrar Funcionário'} onClick={'FormCadastrarFuncionario'} setCadastrarFuncionario={setCadastrarFuncionario} />
        <CadastroGestor text={'Cadastrar Funcionário'} onClick={'FormCadastrarFuncionario'} />
      </div>
      <Documento cadastrarFuncionario={cadastrarFuncionario} />
    </main>
  )
}