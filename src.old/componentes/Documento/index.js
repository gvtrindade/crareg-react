import brasao from '../../imagens/brasao.png';
import './style.css';

export default function Documento({ dadosDoMemorando }) {

    const stringVinculo = () => {

        if (dadosDoMemorando.funcionarios.length > 0) {
            return dadosDoMemorando.funcionarios.some(item => item.genero === 'Masculino') ? 'vinculados' : 'vinculadas';
        } else {
            return dadosDoMemorando.funcionarios.some(item => item.genero === 'Masculino') ? 'vinculado' : 'vinculada';
        }

    }

    return (
        <div className='documento'>
            <div className='cabecalho'>
                <img id='imgBrasao' alt={'Brasão da República'} src={brasao} />
                <p>Diretoria-Geral</p>
                <p>Assessoria de Suporte aos Servidores - <strong>ASuS</strong></p>
            </div>

            <div className='corpo'>
                <p><strong> Memorando nº <span id='numMemo'>{dadosDoMemorando.numeroMemorando || '"Número"'}</span>/<span id='ano'>{dadosDoMemorando.ano || '"Ano"'}</span> - ASuS/DiG</strong></p>
                <p className='dataAtual'>Brasília, <span id='dia'>{dadosDoMemorando.dia}</span> de <span id='mes'>{dadosDoMemorando.mes}</span> de <span id='ano1'>{dadosDoMemorando.ano}</span></p>
                <p>Ao Senhor</p>
                <p><strong>Alexandre Vargas Nascimento</strong></p>
                <p>Diretor da SAS</p>

                <p><strong>Assunto:</strong> Confecção de crachá.</p>

                <p>Senhor Diretor,</p>

                <p>
                    Solicitamos autorização para confecção de crachá de identificação funcional (primeiro crachá) para
                    <span id='funcionario'>{dadosDoMemorando.funcionarios}</span> 
                    <span id='vinculado'>{stringVinculo()}</span> 
                    ao SEA - Serviço de Ensinamento de Aprendizes por meio do Pregão 0001/11, vigente até 25/05/25, que 
                    <span id='desempenhara'>{dadosDoMemorando.desempenhara}</span> suas atividades laborais no 
                    <span id='localDeTrabalho'>{dadosDoMemorando.localDeTrabalho}</span>.
                </p>

                <p>Segue em anexo documentação para efeito de confecção dos documentos de identificação funcional (crachá).</p>

                <p>Respeitosamente,</p>

                <div className='assinatura'>
                    <p>(Assinado Digitalmente)</p>
                    <p><span id='assinante'>{dadosDoMemorando.assinante}</span></p>
                    <p>Assessoria de Suporte aos Servidores - ASuS</p>
                    <p><span id='cargo'>{dadosDoMemorando.cargo}</span> </p>
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