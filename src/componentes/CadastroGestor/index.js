import { useState } from 'react';
import { listaDeGestores } from '../../DataFantasma';
import '../../estilos/Form.css'

export default function CadastroGestor() {
    
    const [displayType, setDisplayType] = useState('none')
    let tipoDisplay = { display: displayType }

    const handleClick = ({ target }) => {
        switch (target.name) {
            case 'mostrarModal':
                mostrarModal();
                break;
            case 'cancelar':
                cancelarForm();
                break;
            case 'deletarGestor':
                deletarGestor();
                break;
            default:
                console.log('Valor inexperado')
        }
    }

    const mostrarModal = () => {
        displayType === 'none' ? setDisplayType('inline') : setDisplayType('none');
    }

    const cancelarForm = () => {
        formulario.reset();
        mostrarModal();
    }

    const [listaGestores, setListaGestores] = useState(listaDeGestores);
    const [gestorADeletar, setGestorADeletar] = useState(null)
    const deletarGestor = () => {
        const indexGestorADeletar = listaGestores.findIndex(element => (
            element.nome === gestorADeletar
        ));
        console.log(indexGestorADeletar)
        setListaGestores(prev => {
            return prev.filter((item, index) => index !== indexGestorADeletar);
        });
        resetarFormulario();
    }

    const [dadosGestor, setDadosGestor] = useState({})
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setDadosGestor((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const formulario = document.getElementById('formulario')
    const resetarFormulario = () => {
        formulario.reset();
        setDadosGestor({});
        mostrarModal();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(dadosGestor);
        setListaGestores(prev => [
            ...prev,
            dadosGestor
        ]);
        resetarFormulario();
        // return dataGestor
    }

    return (
        <div>
            <button onClick={handleClick} className='button' name='mostrarModal'>Cadastrar Gestor</button>
            <div style={tipoDisplay} className='form' id='formGestor'>
                <div className='conteudoForm'>
                    <form onSubmit={handleSubmit} id='formulario' >

                        <strong style={{ fontSize: '20px' }}>Insira informações do novo gestor:</strong>

                        <br/>
                        <label htmlFor='nomeGestor'>Nome:</label>
                        <input type='text' onChange={handleChange} name='nome' value={dadosGestor.nome || ''} required/>

                        <br/>
                        <label>Sexo:</label>

                        <input type='radio' id='gestorMasc' onChange={handleChange} name='genero' value={dadosGestor.genero || 'Masculino'}  required/>
                        <label htmlFor='gestorMasc'>Masculino</label>

                        <input type='radio' id='gestorFem' onChange={handleChange} name='genero' value={dadosGestor.genero || 'Feminino'} required/>
                        <label htmlFor='gestorFem'>Feminino</label>

                        <br/>
                        <label htmlFor='gestorDoContrato'>Gestor do Contrato</label>
                        <input type='checkbox' onChange={handleChange} id='gestorDoContrato' name='gestorDoContrato' value={dadosGestor.gestorDoContrato ||1} />

                        <br/>
                        <label htmlFor='gestorSelecionado1'>Gestores: </label>
                        <select id='gestorSelecionado1' onChange={({ target }) => setGestorADeletar(target.value)} name='gestorADeletar' defaultValue=''>
                            <option style={{ display: 'none' }} disabled value=''>Escolha...</option>
                            {listaGestores.map( (item, index) => (
                                <option value={item.nome} key={index}>{item.nome}</option>
                            ))}
                        </select>
                        <input type='button' name='deletarGestor' onClick={deletarGestor} value='Deletar' />

                        <div className='botoes'>
                            <input type='submit' className='button' value='Cadastrar' />
                            <input type='button' className='button' onClick={handleClick} name='cancelar' value='Cancelar' />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )

}
