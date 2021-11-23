import shieldOfArms from '../images/shieldOfArms.png';
import '../styles/Memo.css';

export default function Memo({ memoData }) {
  const getEmployeesString = () => {
    const string = [];
    memoData.employees.forEach((employee) =>
      string.push(` ${employee.name}, sob identidade número ${employee.id},`)
    );
    return string.join('');
  };

  const getBondTypeString = () => {
    if (memoData.employees.length > 1) {
      return memoData.employees.some((employee) => employee.isMale === 'true')
        ? 'vinculados'
        : 'vinculadas';
    } else {
      // return memoData.employees[0].isMale === 'true'
      //   ? 'vinculado'
      //   : 'vinculada';
    }
  };

  const getRoleWillPlayString = () => {
    return memoData.employees.length > 1 ? 'desempenharão' : 'desempenhará';
  };

  const getSignerIsManagerString = () => {
    const isManager = memoData.signer.isManager === 'on';
    const isMale = memoData.signer.isMale === 'true';

    if (isManager && isMale) {
      return 'Gestor do Contrato';
    } else if (isManager && !isMale) {
      return 'Gestora do Contrato';
    } else if (!isManager && isMale) {
      return 'Subgestor do Contrato';
    } else {
      return 'Subgestora do Contrato';
    }
  };

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
            <span id="memoNumber">{memoData.number || '"Número"'}</span>/
            <span className="currentYear">
              {memoData.currentYear || '"Ano"'}
            </span>{' '}
            - ASuS/DiG
          </strong>
        </p>

        <p id="currentDate">
          Brasília,{' '}
          <span id="currentDay">{memoData.currentDay || '"Dia"'}</span> de{' '}
          <span id="currentMonth">{memoData.currentMonth || '"Mês"'}</span> de{' '}
          <span className="currentYear">{memoData.currentYear || '"Ano"'}</span>
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
            {getEmployeesString() || '"funcionári@(s)"'}
            {/* {'"funcionári@(s)"'} */}
          </span>{' '}
          <span id="bondType">{getBondTypeString() || '"vinculad@(s)"'}</span>{' '}
          {/* <span id="bondType">{'"vinculad@(s)"'}</span> ao SEA - Serviço de */}
          Ensinamento de Aprendizes por meio do Pregão 0001/11, vigente até
          25/05/25, que{' '}
          <span id="roleWillPlay">
            {getRoleWillPlayString() || '"desempenhará(o)"'}
            {/* {'"desempenhará(o)"'} */}
          </span>{' '}
          suas atividades laborais no{' '}
          <span id="place">{memoData.place || '"local"'}</span>.
        </p>

        <p>
          Segue em anexo documentação para efeito de confecção dos documentos de
          identificação funcional (crachá).
        </p>

        <p>Respeitosamente,</p>

        <div className="signature">
          <p>(Assinado Digitalmente)</p>
          <p>
            <span id="signer">{memoData.signer.name || '"Assinante"'}</span>
            {/* <span id="signer">{'"Assinante"'}</span> */}
          </p>
          <p>Assessoria de Suporte aos Servidores - ASuS</p>
          <p>
            <span id="signerRole">
              {getSignerIsManagerString() || '"Cargo"'}
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
