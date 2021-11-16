import { useState, useEffect } from "react";
import Documento from "./componentes/Documento/index"
import CadastroFuncionario from "./componentes/CadastroFuncionario/index";
import CadastroGestor from "./componentes/CadastroGestor/index";
import { gestoresMock, locaisMock } from "./data/dataF";
import './estilos/App.css'

export default function App() {

  const [listaDeGestores, setListaDeGestores] = useState([])
  const [locaisDeTrabalho, setLocaisDeTrabalho] = useState([])
  useEffect(() => {
    const gestores = gestoresMock;
    const locais = locaisMock;
    setListaDeGestores(gestores);
    setLocaisDeTrabalho(locais);
  }, []);
      
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
    <>
      <CadastroFuncionario 
        text={'Cadastrar Funcionário'} 
        setCadastrarFuncionario={setCadastrarFuncionario}
        listaDeGestores={listaDeGestores}
        locaisDeTrabalho={locaisDeTrabalho}
      />

      <CadastroGestor 
        text={'Cadastrar Funcionário'} 
        listaDeGestores={listaDeGestores} 
        setListaDeGestores={setListaDeGestores} 
      />

      <Documento cadastrarFuncionario={cadastrarFuncionario} />
    </>
  )
}