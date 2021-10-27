import { useState } from "react";

export default function CadastroGestor() {
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
            <button onClick={handleClick} >Cadastrar Gestor</button>
            <div style={styles} className="form" id="formGestor">
                <div className="conteudoForm">
                    <form>

                        <strong style={{fontSize:'20px'}}>Insira informações do novo gestor:</strong>

                        <div>
                            <label htmlFor="nomeGestor">Nome:</label>
                            <input type="text" id="nomeGestor" />
                        </div>

                        <div>
                            <label>Sexo:</label>

                            <input type="radio" id="gestorMasc" name="gestorSexo" value="Masculino" defaultChecked />
                            <label htmlFor="gestorMasc">Masculino</label>

                            <input type="radio" id="gestorFem" name="gestorSexo" value="Feminino" />
                            <label htmlFor="gestorFem">Feminino</label>
                        </div>

                        <input type="checkbox" id="eGestordoContrato" />
                        <label htmlFor="eGestordoContrato">Gestor do Contrato</label>

                        <div>
                            <label htmlFor="gestorSelecionado1">Gestores: </label>
                            <select id="gestorSelecionado1"></select>
                            <input type="button" id="deletarGestor" value="Deletar" />
                        </div>

                        <div className="botoes">
                            <input type="button" id="cadastroGestor" value="Cadastrar" />
                            <input onClick={handleClick} type="button" id="cancelarGestor" value="Cancelar" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )    

}
