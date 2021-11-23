import { useState } from 'react'
import '../../estilos/Form.css'

const dataAtual = new Date();
const mesPorExtenso = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
];

export default function CadastroFuncionario({ setDadosDoMemorando, listaDeGestores, locaisDeTrabalho }) {

    const handleClick = ({ target }) => {
        switch (target.name) {
            case 'mostrarModal':
                mostrarModal();
                break;
            case 'cancelar':
                cancelarFormulario();
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

    window.onclick = function (event) {
        if (event.target.className === 'form') {
            cancelarFormulario();
        }
    }


    const formulario = document.getElementById('formCadastroFuncionario');
    const listaNomes = document.getElementById('listaNomes');

    const cancelarFormulario = () => {
        if (listaNomes.childElementCount > 0) {
            while (listaNomes.firstChild) { listaNomes.firstChild.remove() };
        }
        formulario.reset();
        setNovoFuncionario({});
        setDadosCadastro({}); //Nâo está funcionando!!
        mostrarModal();
    }


    const [dadosCadastro, setDadosCadastro] = useState({})

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setDadosCadastro((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const [novoFuncionario, setNovoFuncionario] = useState(new Funcionario())
    const handleChangeNovoFuncionario = ({ target }) => {
        const { name, value } = target;
        setNovoFuncionario((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    
    const formularioDeFuncionarioEstaCompleto = () => {
        return (
            novoFuncionario.nome !== undefined &&
            novoFuncionario.nome !== '' &&
            novoFuncionario.genero !== undefined &&
            novoFuncionario.identidade !== undefined &&
            novoFuncionario.identidade !== ''
        );
    }

    const [listaFuncionarios, setListaFuncionarios] = useState([]);
    //Ao clicar em cadastrar funcionario depois de já ter cadastrado algum, carregar os dados já preenchidos no formulário
    const adicionarFuncionario = () => {
        if (formularioDeFuncionarioEstaCompleto()) {
            const funcionarioExiste = listaFuncionarios.findIndex(element => (
                element.identidade === novoFuncionario.identidade
            ));

            if (funcionarioExiste === -1) {
                setListaFuncionarios(prev => [novoFuncionario, ...prev])
            } else {
                alert('Já existe um funcionário com esta identidade');
            }
            document.getElementById('radioMasculino').checked = false;
            document.getElementById('radioFeminino').checked = false;
            setNovoFuncionario(new Funcionario('','',''));
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
            return stringFuncionariosCadastrados([novoFuncionario]);
        } else if (formularioDeFuncionarioEstaCompleto() && listaNomes.childElementCount !== 0) {
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

    // const stringVinculo = () => {

    //     if (listaFuncionarios.length > 0) {
    //         return listaFuncionarios.some(item => item.genero === 'Masculino') ? 'vinculados' : 'vinculadas';
    //     } else {
    //         return novoFuncionario.genero === 'Masculino' ? 'vinculado' : 'vinculada';
    //     }

    // }

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
        //Verificar se vetor de funcionarios esta vazio
        //Inserir automaticamente funcionarios à lista

        setDadosDoMemorando(() => ({
            ...dadosCadastro,
            dia: (dataAtual.getDate() < 10 ? '0' : '') + dataAtual.getDate(),
            mes: mesPorExtenso[dataAtual.getMonth()],
            ano: dataAtual.getFullYear(),
            funcionarios: numFuncionarios(),
            // vinculado: stringVinculo(),
            desempenhara: stringDesempenho(),
            cargo: cargoDoAssinante()
        }));

        cancelarFormulario();
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
                        <input type='text' onChange={handleChangeNovoFuncionario} id='nomeFuncionario' name='nome' value={novoFuncionario.nome || ''} />

                        <br />
                        <label>Gênero:</label>

                        <input type='radio' onChange={handleChangeNovoFuncionario} id='radioMasculino' name='genero' value={novoFuncionario.genero || 'Masculino'} />
                        <label htmlFor='radioMasculino'>Masculino</label>

                        <input type='radio' onChange={handleChangeNovoFuncionario} id='radioFeminino' name='genero' value={novoFuncionario.genero || 'Feminino'} />
                        <label htmlFor='radioFeminino'>Feminino</label>

                        <br />
                        <label htmlFor='idFuncionario'>Identidade:</label>
                        <input type='text' onChange={handleChangeNovoFuncionario} id='idFuncionario' name='identidade' value={novoFuncionario.identidade || ''} />

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
                            <input onClick={cancelarFormulario} type='button' id='cancelarFuncionario' className='button' value='Cancelar' />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

