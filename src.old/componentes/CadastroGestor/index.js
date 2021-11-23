import { useState } from 'react';
import '../../estilos/Form.css'

export default function CadastroGestor({ listaDeGestores, setListaDeGestores}) {
    
    const handleClick = ({ target }) => {
        switch (target.name) {
            case 'mostrarModal':
                mostrarModal();
                break;
            case 'cancelar':
                cancelarFormulario();
                break;
            case 'deletarGestor':
                deletarGestor();
                break;
            default:
                console.log('Valor inexperado')
        }
    }
    
    const [displayType, setDisplayType] = useState('none')
    let tipoDisplay = { display: displayType }
    
    const mostrarModal = () => {
        displayType === 'none' ? setDisplayType('inline') : setDisplayType('none');
    }

    window.onclick = function(event) {
        if (event.target.className === 'form') {
            cancelarFormulario();
        }
    }

    const formulario = document.getElementById('formulario')
    const cancelarFormulario = () => {
        formulario.reset();
        setDadosGestor({});
        mostrarModal();
    }

    const [gestorADeletar, setGestorADeletar] = useState(null)
    const deletarGestor = () => {
        const indexGestorADeletar = listaDeGestores.findIndex(element => (
            element.nome === gestorADeletar
        ));
        console.log(indexGestorADeletar)
        setListaDeGestores(prev => {
            return prev.filter((item, index) => index !== indexGestorADeletar);
        });
        cancelarFormulario();
    }

    const [dadosGestor, setDadosGestor] = useState({})
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setDadosGestor((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(dadosGestor);
        setListaDeGestores(prev => [
            ...prev,
            dadosGestor
        ]);
        cancelarFormulario();
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
                            {listaDeGestores.map( (item, index) => (
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
