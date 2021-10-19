import React from "react";
import brasao from "../imagens/brasao.jpg"
import rodape from "../imagens/rodape.jpg"
import "../styles/Documento.css"

export class Documento extends React.Component{
    render(){
        return (
            <>
                <div className='cabecalho'>          
                    <img id='imgBrasao' src={brasao} />
                    <p>Diretoria-Geral</p>
                    <p>Assessoria de Qualidade de Atendimento e Logistica - <strong>ASQUALOG</strong></p>
                </div>

                <div className='corpo'>
                    <p><strong> Memorando nº <span id='numMemo'>"Número"</span>/<span id='ano' name="ano">"Ano"</span> - ASQUALOG/DGER</strong></p>
                    <p class="dataAtual">Brasília, <span id='dia'>"Dia"</span> de <span id='mes'>"Mês"</span> de <span id='ano1' name="ano">"Ano"</span></p>
                    <p>Ao Senhor</p>
                    <p><strong>ALESSANDRO MORALES MARTINS</strong></p>
                    <p>Diretor da SPSF</p>

                    <p><strong>Assunto:</strong> Confecção de crachá.</p>

                    <p>Senhor Diretor,</p>
                    <p>Solicitamos autorização para confecção de crachá de identificação funcional (primeiro crachá) para <span id="funcionario">"Funcionári@"</span>: <span id="nome">"Nome"</span>
                        <span id="vinculacao">"vinculad@"</span> ao SENAC - Serviço Nacional de Aprendizagem Comercial por meio do Acordo de Cooperação 0001/11, vigente até 25/01/21, que <span id="desempenho">"desempenhara(o)"</span> suas atividades laborais no
                        <span id="lugar">"lugar"</span>.</p>

                    <p>Segue em anexo documentação para efeito de confecção dos documentos de identificação funcional (crachá).</p>

                    <p>Respeitosamente,</p>

                    <div class="assinatura">
                    <p>(Assinado Digitalmente)</p>
                    <p><span id="assinante">"Assinante"</span></p>
                    <p>Assessoria de Qualidade de Atendimento e Logística - ASQUALOG</p>
                    <p><span id="cargo">"Cargo"</span> </p>
                    </div>
                </div>
            
                <div class="rodape">
                    <p class="setor">ASQUALOG/DGER</p>
                    <img id='imgRodape' src={rodape} />
                    <p> Senado Federal | Via N2 – Gráfica Senado – Bloco 10, Área Inferior, Sala 17 | CEP: 70165-900 | Brasília-DF</p>
                    <p> Telefone: +55 (61) 3303-4068 | Fax: +55 (61) 3303-4020 | dger@senado.gov.br</p>
                </div>
            </>   
        )
    }
}