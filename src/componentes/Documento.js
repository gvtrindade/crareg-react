import brasao from "../imagens/brasao.jpg";
import rodape from "../imagens/rodape.jpg";
import "../estilos/Documento.css";

export default function Documento({cadastrarFuncionario}) {
    console.log(cadastrarFuncionario)

    return (
        <div>
            <div className='cabecalho'>          
                <img id='imgBrasao' alt={'Brasão da República'} src={brasao} />
                <p>Diretoria-Geral</p>
                <p>Assessoria de Qualidade de Atendimento e Logistica - <strong>ASQUALOG</strong></p>
            </div>

            <div className='corpo'>
                <p><strong> Memorando nº <span id='numMemo'>{cadastrarFuncionario.numeroMemorando}</span>/<span id='ano'>{cadastrarFuncionario.ano}</span> - ASQUALOG/DGER</strong></p>
                <p className="dataAtual">Brasília, <span id='dia'>{cadastrarFuncionario.dia}</span> de <span id='mes'>{cadastrarFuncionario.mes}</span> de <span id='ano1'>{cadastrarFuncionario.ano}</span></p>
                <p>Ao Senhor</p>
                <p><strong>ALESSANDRO MORALES MARTINS</strong></p>
                <p>Diretor da SPSF</p>

                <p><strong>Assunto:</strong> Confecção de crachá.</p>

                <p>Senhor Diretor,</p>

                <p>Solicitamos autorização para confecção de crachá de identificação funcional (primeiro crachá) para <span id="funcionario">{cadastrarFuncionario.funcionarios}</span> <span id="vinculado">{cadastrarFuncionario.vinculado}</span> ao SENAC - Serviço Nacional de Aprendizagem Comercial por meio do Acordo de Cooperação 0001/11, vigente até 25/01/21, que <span id="desempenhara">{cadastrarFuncionario.desempenhara}</span> suas atividades laborais no <span id="localDeTrabalho">{cadastrarFuncionario.localDeTrabalho}</span>.</p>

                <p>Segue em anexo documentação para efeito de confecção dos documentos de identificação funcional (crachá).</p>

                <p>Respeitosamente,</p>

                <div className="assinatura">
                <p>(Assinado Digitalmente)</p>
                <p><span id="assinante">{cadastrarFuncionario.assinante}</span></p>
                <p>Assessoria de Qualidade de Atendimento e Logística - ASQUALOG</p>
                <p><span id="cargo">{cadastrarFuncionario.cargo}</span> </p>
                </div>
            </div>
        
            <div className="rodape">
                <p className="setor">ASQUALOG/DGER</p>
                <img id='imgRodape' alt={'rodapé'} src={rodape} />  {/*Definir melhor tag para divisor de rodapé*/}
                <p> Senado Federal | Via N2 – Gráfica Senado – Bloco 10, Área Inferior, Sala 17 | CEP: 70165-900 | Brasília-DF</p>
                <p> Telefone: +55 (61) 3303-4068 | Fax: +55 (61) 3303-4020 | dger@senado.gov.br</p>
            </div>
        </div>   
    )
}