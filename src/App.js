import React from "react";
import Documento from "./componentes/Documento"
import CadastroFuncionario from "./componentes/CadastroFuncionario";
import CadastroGestor from "./componentes/CadastroGestor";


export default function App() {
  return (
    <main>
      <div className='botoes' id='botoesCadastro'>
        <CadastroFuncionario text={'Cadastrar Funcionário'} onClick={'FormCadastrarFuncionario'} />
        <CadastroGestor text={'Cadastrar Funcionário'} onClick={'FormCadastrarFuncionario'} />
      </div>
      <Documento />
    </main>
  )
}