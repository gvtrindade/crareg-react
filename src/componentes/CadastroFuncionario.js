import { useState } from "react"

export default function CadastroFuncionario() {
    const [displayType, setDisplayType] = useState('none')
    let styles = {display: displayType}

    const handleClick = () => {
        if (displayType === 'none'){
            setDisplayType('inline');
        } else {
            setDisplayType('none');
        }
    }

    return (
        <div>
            <button onClick={handleClick} >Cadastrar Funcionário</button>
            <div style={styles} className="form" id="formFuncionario">
        
                <div className="conteudoForm">
                    <form>

                        <h3> Insira as informações do funcionário:</h3>

                        <div>
                            <label for="numeroMemorando">Número:</label>
                            <input type='text' id="numeroMemorando" />

                            <br />
                            <label for="gestorSelecionado">Assinante: </label>
                            <select id="gestorSelecionado"></select>

                            <br />
                            <label for="lugarSelecionado">Local de trabalho:</label>
                            <select id="lugarSelecionado">
                                <option value = "Restaurante dos Senadores">Restaurante dos Senadores</option>
                                <option value = "Cafézinho dos Senadores">Cafézinho dos Senadores</option>
                                <option value = "Lanchonete do Prodasen">Lanchonete do Prodasen</option>
                                <option value = "Casa de Massas">Casa de Massas</option>
                            </select>
                        </div>

                        <label for="nomeFuncionario">Nome:</label>
                        <input type='text' id="nomeFuncionario" />

                        <br/>
                        <label>Sexo:</label>

                        <input type="radio" id="funcMasc" name="funcionarioSexo" value="Masculino" checked />
                        <label for="funcMasc">Masculino</label>

                        <input type="radio" id="funcFem" name="funcionarioSexo" value="Feminino" />
                        <label for="funcFem">Feminino</label>


                        <br />
                        <label for="idFuncionario">Identidade:</label>
                        <input type='text' id="idFuncionario" />

                        <input onClick="listarFuncionario()" type="button" id="adicionarFuncionario" value="+" />
                        <div>
                            <ul id="listaNomes"></ul>
                        </div>

                        <div className="botoes">
                            <input onClick="substituirFuncionario()" type="button" id="cadastroFuncionario" value="Cadastrar" />
                            <input onClick={handleClick} type="button" id="cancelarFuncionario" value="Cancelar"  />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}