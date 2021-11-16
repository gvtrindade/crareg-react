import { useState } from 'react'
import '../../estilos/Form.css'

const dataAtual = new Date();
const mesPorExtenso = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
];

export default function CadastroFuncionario({ setCadastrarFuncionario, listaDeGestores, locaisDeTrabalho }) {

    const formulario = document.getElementById('formCadastroFuncionario');
    const listaNomes = document.getElementById('listaNomes');

    const handleClick = ({ target }) => {
        switch (target.name) {
            case 'mostrarModal':
                mostrarModal();
                break;
            case 'adicionarFuncionario':
                adicionarFuncionario();
                break;
            default:
                console.log('Valor inexperado')
        }
    }

    const [displayType, setDisplayType] = useState('none');
    let tipoDisplay = { display: displayType };

    const mostrarModal = () => {
        displayType === 'none' ? setDisplayType('inline') : setDisplayType('none');
    }

    const [dadosCadastro, setDadosCadastro] = useState({})

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setDadosCadastro((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const [funcionarioAdicionado, setFuncionarioAdicionado] = useState({})
    const handleChangeFunc = ({ target }) => {
        const { name, value } = target;
        setFuncionarioAdicionado((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const camposPreenchidos = () => {
        const a = funcionarioAdicionado.nome !== undefined
        const aa =  funcionarioAdicionado.nome !== ''
        const b =  funcionarioAdicionado.genero !== undefined
        const c = funcionarioAdicionado.identidade !== undefined 
        const cc = funcionarioAdicionado.identidade !== ''
        return (a && aa && b && c && cc);
    }
    
    const [listaFuncionarios, setListaFuncionarios] = useState([]);
    const adicionarFuncionario = () => {
        if(camposPreenchidos()){
            const funcionarioExiste = listaFuncionarios.findIndex(element => (
                element.identidade === funcionarioAdicionado.identidade
            ));

            if (funcionarioExiste === -1) {
                setListaFuncionarios(prev => [funcionarioAdicionado, ...prev])
            } else {
                alert('Já existe um funcionário com esta identidade');
            }
            document.getElementById('radioMasculino').checked = false;
            document.getElementById('radioFeminino').checked = false;
            setFuncionarioAdicionado({});
        }
    }

    const removerFuncionario = funcionarioARemover => {
        setListaFuncionarios(prevState => {
            return prevState.filter((item, index) => index !== funcionarioARemover);
        });
    }

    const numFuncionarios = () => {
        if (listaNomes.childElementCount === 0) {
            console.log('um funcionario');
            return stringFuncionariosCadastrados([funcionarioAdicionado]);
        } else if (camposPreenchidos() && listaNomes.childElementCount !== 0){
            alert('Adicione o funcionário à lista antes de gerar o memorando.')
            //Previnir o cadastro
        }

        return stringFuncionariosCadastrados(listaFuncionarios);
    }

    const stringFuncionariosCadastrados = list => {
        const funcionariosCadastrados = [];
        list.forEach(e => (funcionariosCadastrados.push(` ${e.nome}, sob identidade número ${e.identidade},`)));
        return funcionariosCadastrados.join('');
    }

    const stringVinculacao = () => {

        if (listaFuncionarios.length > 0) {
            return listaFuncionarios.some(item => item.genero === 'Masculino') ? 'vinculados' : 'vinculadas';
        } else {
            return funcionarioAdicionado.genero === 'Masculino' ? 'vinculado' : 'vinculada';
        }

    }

    const stringDesempenho = () => {
        return listaFuncionarios.length > 1 ? 'desempenharão' : 'desempenhará'
    }

    const cargoDoAssinante = () => {
        const index = listaDeGestores.findIndex(element => (
            element.nome === dadosCadastro.assinante
        ));

        const eGestorDoContrato = 'gestorDoContrato' in listaDeGestores[index];
        const eHomem = listaDeGestores[index].genero === 'Masculino';

        if (eGestorDoContrato && eHomem) {
            return 'Gestor do Contrato';
        } else if (eGestorDoContrato && !eHomem) {
            return 'Gestora do Contrato';
        } else if (!eGestorDoContrato && eHomem) {
            return 'Subgestor do Contrato';
        } else {
            return 'Subgestora do Contrato';
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        setCadastrarFuncionario(() => ({
            ...dadosCadastro,
            dia: (dataAtual.getDate() < 10 ? '0' : '') + dataAtual.getDate(),
            mes: mesPorExtenso[dataAtual.getMonth()],
            ano: dataAtual.getFullYear(),
            funcionarios: numFuncionarios(),
            vinculado: stringVinculacao(),
            desempenhara: stringDesempenho(),
            cargo: cargoDoAssinante()
        }));

        resetarFormulario();
    }

    const resetarFormulario = () => {
        if (listaNomes.childElementCount > 0) {
            while (listaNomes.firstChild) { listaNomes.firstChild.remove() };
        }
        formulario.reset();
        setFuncionarioAdicionado({});
        setDadosCadastro({}); //Nâo está funcionando!!
        mostrarModal();
    }

    return (
        <div>
            <button onClick={handleClick} className='button' name='mostrarModal' >Cadastrar Funcionário</button>

            <div style={tipoDisplay} className='form' id='formFuncionario'>
                <div className='fundoForm'></div>
                <div className='conteudoForm'>
                    <form id='formCadastroFuncionario' onSubmit={handleSubmit}>

                        <h3> Insira as informações do funcionário:</h3>

                        <label htmlFor='numero'>Número:</label>
                        <input type='text' id='numero' onChange={handleChange} name='numeroMemorando' value={dadosCadastro.numeroMemorando || ''} required />

                        <br />
                        <label htmlFor='assinante'>Assinante: </label>
                        <select id='assinante' onChange={handleChange} defaultValue='' name='assinante' required>
                            <option style={{ display: 'none' }} disabled value=''>Escolha...</option>
                            {listaDeGestores.map((item, index) => (
                                <option value={dadosCadastro.assinante || item.nome} key={index}>
                                    {item.nome}
                                </option>
                            ))}
                        </select>

                        <br />
                        <label htmlFor='lugarSelecionado'>Local de trabalho: </label>
                        <select id='lugarSelecionado' onChange={handleChange} defaultValue='' name='localDeTrabalho' required>
                            <option style={{ display: 'none' }} disabled value=''>Escolha...</option>
                            {locaisDeTrabalho.map((item, index) => (
                                <option value={item} key={index}>
                                    {item}
                                </option>
                            ))}
                        </select>

                        <br />

                        <label htmlFor='nomeFuncionario'>Nome:</label>
                        <input type='text' onChange={handleChangeFunc} id='nomeFuncionario' name='nome' value={funcionarioAdicionado.nome || ''} />

                        <br />
                        <label>Gênero:</label>

                        <input type='radio' onChange={handleChangeFunc} id='radioMasculino' name='genero' value={funcionarioAdicionado.genero || 'Masculino'} />
                        <label htmlFor='radioMasculino'>Masculino</label>

                        <input type='radio' onChange={handleChangeFunc} id='radioFeminino' name='genero' value={funcionarioAdicionado.genero || 'Feminino'} />
                        <label htmlFor='radioFeminino'>Feminino</label>

                        <br />
                        <label htmlFor='idFuncionario'>Identidade:</label>
                        <input type='text' onChange={handleChangeFunc} id='idFuncionario' name='identidade' value={funcionarioAdicionado.identidade || ''} />

                        <input type='button' name='adicionarFuncionario' onClick={handleClick} value='+' />

                        <div>
                            <ul id='listaNomes'>
                                {listaFuncionarios.map((item, index) => (
                                    <li key={index}>{item.nome}
                                        <input type='button' onClick={() => removerFuncionario(index)} value='-' />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='botoes'>
                            <input type='submit' className='button' value='Cadastrar' />
                            <input onClick={resetarFormulario} type='button' id='cancelarFuncionario' className='button' value='Cancelar' />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}