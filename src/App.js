import { useState } from 'react';
import Memo from './components/Memo';
import RegisterForm from './components/RegisterForm';
import SignerForm from './components/SignerForm';
import './styles/App.css';

export default function App() {
  const [signers, setSigners] = useState([
    { name: 'José Alencar', isMale: 'true', isManager: '' },
    { name: 'Marisa Monte', isMale: 'false', isManager: 'on' },
  ]);
  const [memoData, setMemoData] = useState();

  return (
    <>
      <div className="modals">
        <RegisterForm
          memoData={memoData}
          setMemoData={setMemoData}
          signers={signers}
        />
        <SignerForm signers={signers} setSigners={setSigners} />
      </div>
      <Memo memoData={memoData} />
    </>
  );
}
