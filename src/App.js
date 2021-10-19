import React from "react";
import { Documento } from "./components/Documento";
import { FormCadastFuncionario } from "./components/FormCadastFuncionario";
import { FormCadastGestor } from "./components/FormCadastGestor";


export class App extends React.Component {
  render() {
    return (
      <>
        <div className='botoes' id='botoesCadastro'>
          <FormCadastFuncionario text={'Cadastrar Funcionário'} onClick={'FormCadastrarFuncionario'} />
          <FormCadastGestor text={'Cadastrar Funcionário'} onClick={'FormCadastrarFuncionario'} />
        </div>

        <Documento />
        
      </>  
    )
  }
}