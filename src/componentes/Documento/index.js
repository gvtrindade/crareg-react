import brasao from '../../imagens/brasao.png'; //Mudar brasão
import './style.css';

export default function Documento({cadastrarFuncionario}) {

    return (
        <div className='documento'>
            <div className='cabecalho'>          
                <img id='imgBrasao' alt={'Brasão da República'} src={brasao} />
                <p>Diretoria-Geral</p>
                <p>Assessoria de Suporte aos Servidores - <strong>ASuS</strong></p>
            </div>

            <div className='corpo'>
                <p><strong> Memorando nº <span id='numMemo'>{cadastrarFuncionario.numeroMemorando}</span>/<span id='ano'>{cadastrarFuncionario.ano}</span> - ASuS/DiG</strong></p>
                <p className='dataAtual'>Brasília, <span id='dia'>{cadastrarFuncionario.dia}</span> de <span id='mes'>{cadastrarFuncionario.mes}</span> de <span id='ano1'>{cadastrarFuncionario.ano}</span></p>
                <p>Ao Senhor</p>
                <p><strong>Alexandre Vargas Nascimento</strong></p>
                <p>Diretor da SAS</p>

                <p><strong>Assunto:</strong> Confecção de crachá.</p>

                <p>Senhor Diretor,</p>

                <p>Solicitamos autorização para confecção de crachá de identificação funcional (primeiro crachá) para<span id='funcionario'>{cadastrarFuncionario.funcionarios}</span> <span id='vinculado'>{cadastrarFuncionario.vinculado}</span> ao SEA - Serviço de Ensinamento de Aprendizes por meio do Pregão 0001/11, vigente até 25/05/25, que <span id='desempenhara'>{cadastrarFuncionario.desempenhara}</span> suas atividades laborais no <span id='localDeTrabalho'>{cadastrarFuncionario.localDeTrabalho}</span>.</p>

                <p>Segue em anexo documentação para efeito de confecção dos documentos de identificação funcional (crachá).</p>

                <p>Respeitosamente,</p>

                <div className='assinatura'>
                <p>(Assinado Digitalmente)</p>
                <p><span id='assinante'>{cadastrarFuncionario.assinante}</span></p>
                <p>Assessoria de Suporte aos Servidores - ASuS</p>
                <p><span id='cargo'>{cadastrarFuncionario.cargo}</span> </p>
                </div>
            </div>
        
            <div className='rodape'>
                <p className='setor'>ASuS/DiG</p>
                <hr id='hrA' />
                <hr id='hrB' />
                <p> Edifíco Hoje do Amanhã | Rua da Esquerda – Bloco 10, Sala 357 | CEP: 12345-678 | Brasília-DF</p>
                <p> Telefone: +55 (99) 1234-7070 | asus@dig.org.br</p>
            </div>
        </div>   
    )
}