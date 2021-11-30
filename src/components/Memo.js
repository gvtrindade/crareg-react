import shieldOfArms from '../images/shieldOfArms.png';
import '../styles/Memo.css';

export default function Memo({ memoData }) {


  return (
    <div className="memo">
      <div className="memoHeader">
        <img src={shieldOfArms} alt={'Brasão da República'} />
        <div className="no-spacing">
          <p>Diretoria-Geral</p>
          <p>
            Assessoria de Suporte aos Servidores - <strong>ASuS</strong>
          </p>
        </div>
      </div>

      <div>
        <p>
          <strong>
            {' '}
            Memorando nº{' '}
            <span id="memoNumber">{memoData?.number || '"Número"'}</span>/
            <span className="currentYear">
              {memoData?.currentYear || '"Ano"'}
            </span>{' '}
            - ASuS/DiG
          </strong>
        </p>

        <p id="currentDate">
          Brasília,{' '}
          <span id="currentDay">{memoData?.currentDay || '"Dia"'}</span> de{' '}
          <span id="currentMonth">{memoData?.currentMonth || '"Mês"'}</span> de{' '}
          <span className="currentYear">{memoData?.currentYear || '"Ano"'}</span>
        </p>

        <div className="no-spacing">
          <p>Ao Senhor</p>
          <strong>Alexandre Vargas Nascimento</strong>
          <p>Diretor da SAS</p>
        </div>

        <p>
          <strong>Assunto:</strong> Confecção de crachá.
        </p>

        <p>Senhor Diretor,</p>

        <p>
          Solicitamos autorização para confecção de crachá de identificação
          funcional (primeiro crachá) para
          <span id="employeeList">
            {memoData?.employeesInfo || '"funcionári@(s)"'}
            {/* {'"funcionári@(s)"'} */}
          </span>{' '}
          <span id="bondType">{memoData?.employeesBond || '"vinculad@(s)"'}</span>{' '}
          {/* <span id="bondType">{'"vinculad@(s)"'}</span> ao SEA - Serviço de */}
          Ensinamento de Aprendizes por meio do Pregão 0001/11, vigente até
          25/05/25, que{' '}
          <span id="roleWillPlay">
            {memoData?.employeesRole || '"desempenhará(o)"'}
            {/* {'"desempenhará(o)"'} */}
          </span>{' '}
          suas atividades laborais no{' '}
          <span id="place">{memoData?.place || '"local"'}</span>.
        </p>

        <p>
          Segue em anexo documentação para efeito de confecção dos documentos de
          identificação funcional (crachá).
        </p>

        <p>Respeitosamente,</p>

        <div className="signature">
          <p>(Assinado Digitalmente)</p>
          <p>
            <span id="signer">{memoData?.signer?.name || '"Assinante"'}</span>
            {/* <span id="signer">{'"Assinante"'}</span> */}
          </p>
          <p>Assessoria de Suporte aos Servidores - ASuS</p>
          <p>
            <span id="signerRole">
              {memoData?.signerRole || '"Cargo"'}
            </span>{' '}
            {/* <span id="signerRole">{'"Cargo"'}</span>{' '} */}
          </p>
        </div>
      </div>

      <div className="memoFooter">
        <p className="departament">ASuS/DiG</p>
        <hr id="hrA" />
        <hr id="hrB" />
        <p>
          {' '}
          Edifíco Hoje do Amanhã | Rua da Esquerda – Bloco 10, Sala 357 | CEP:
          12345-678 | Brasília-DF
        </p>
        <p> Telefone: +55 (99) 1234-7070 | asus@dig.org.br</p>
      </div>
    </div>
  );
}
