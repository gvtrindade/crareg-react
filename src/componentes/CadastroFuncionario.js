import { useState } from 'react'

const dataAtual = new Date();
const mesPorExtenso = ['','janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

export default function CadastroFuncionario({setCadastrarFuncionario}) {
    const [displayType, setDisplayType] = useState('none');
    let modalMostrado = {display: displayType};

    const mostarModal = () => {
        displayType === 'none' ? setDisplayType('inline') : setDisplayType('none');
    }

    const [numMemorando, setNumMemorando] = useState('');
    const inputNumMemorando = (e) => {
        setNumMemorando(e.target.value)
    }
    
    const [assinante, setAssinante] = useState({});
    const selectAssinante = (e) => {
        setAssinante({assinante: e.target.value,
        cargo: 'Subgestor do Contrato'})
    }

    const [localDeTrabalho, setLocalDeTrabalho] = useState('');
    const selectLocalDeTrabalho = (e) => {
        setLocalDeTrabalho(e.target.value)
    }

    const [nomeFuncionario, setNomeFuncionario] = useState('');
    const inputNomeFuncionario = (e) => {
        setNomeFuncionario(e.target.value)
    }

    const [generoFuncionario, setGeneroFuncionario] = useState('');
    const radioGeneroFuncionario = (e) => {
        setGeneroFuncionario(e.target.value)
    }
    
    const [identidadeFuncionario, setIdentidadeFuncionario] = useState('');
    const inputIdentidadeFuncionario = (e) => {
        setIdentidadeFuncionario(e.target.value)
    }

    const adicionarFuncionario = () => {
        return(
            <li>{nomeFuncionario}</li>
        )
    }

    const onCadastButtonClick = () => {
        setCadastrarFuncionario({
            numeroMemorando: numMemorando,
            dia: dataAtual.getDate(),
            mes: mesPorExtenso[dataAtual.getMonth()],
            ano: dataAtual.getFullYear(),
            vinculado: '',
            desempenhara: '',
            localDeTrabalho: localDeTrabalho,
            ...assinante
        });
    }


    return (
        <div>
            <button onClick={mostarModal} >Cadastrar Funcionário</button>

            <div style={modalMostrado} className='form' id='formFuncionario'>
                <div className='fundoForm'></div>
                <div className='conteudoForm'>
                    <form>

                        <h3> Insira as informações do funcionário:</h3>

                        <label htmlFor='inputNumMemo'>Número:</label>
                        <input type='text' onChange={inputNumMemorando} />

                        <br />
                        <label htmlFor='gestorSelecionado'>Assinante: </label>
                        <select id='gestorSelecionado' onChange={selectAssinante} defaultValue=''>
                            <option style={{display: 'none'}} disabled value=''>Escolha...</option>
                            <option value='Ari Cardoso'>Ari Cardoso</option>
                            <option value='Lucyana Vega'>Lucyana Vega</option>
                        </select>

                        <br />
                        <label htmlFor='lugarSelecionado'>Local de trabalho: </label>
                        <select id='lugarSelecionado' onChange={selectLocalDeTrabalho} defaultValue=''>
                            <option style={{display: 'none'}} disabled value=''>Escolha...</option>
                            <option value='Restaurante dos Senadores'>Restaurante dos Senadores</option>
                            <option value='Cafézinho dos Senadores'>Cafézinho dos Senadores</option>
                            <option value='Lanchonete do Prodasen'>Lanchonete do Prodasen</option>
                            <option value='Casa de Massas'>Casa de Massas</option>
                        </select>

                        <br/>
                        <label htmlFor='nomeFuncionario'>Nome:</label>
                        <input type='text' id='nomeFuncionario' onChange={inputNomeFuncionario} />

                        <br/>
                        <label>Sexo:</label>

                        <input type='radio' id='radioMasculino' value='Masculino' onChange={radioGeneroFuncionario} />
                        <label htmlFor='radioMasculino'>Masculino</label>

                        <input type='radio' id='radioFeminino' value='Feminino' onChange={radioGeneroFuncionario} />
                        <label htmlFor='radioFeminino'>Feminino</label>

                        <br />
                        <label htmlFor='idFuncionario'>Identidade:</label>
                        <input type='text' id='idFuncionario' onChange={inputIdentidadeFuncionario} />

                        <input type='button' id='adicionarFuncionario' onClick={adicionarFuncionario} value='+' />

                        <div>
                            <ul id='listaNomes'></ul>
                        </div>

                        <div className='botoes'>
                            <input onClick={onCadastButtonClick} type='button' id='cadastroFuncionario' value='Cadastrar' />
                            <input onClick={mostarModal} type='button' id='cancelarFuncionario' value='Cancelar'  />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}