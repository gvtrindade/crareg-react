import { useState } from 'react';
import { Signer } from '../models/signer';
import '../styles/Modal.css'

export default function SignerForm({ signers, setSigners }) {
  const [displayType, setDisplayType] = useState('none');
  const [name, setName] = useState('');
  const [isMale, setIsMale] = useState('');
  const [isManager, setIsManager] = useState('');
  const [signerToDelete, setSignerToDelete] = useState('');

  const showModal = () => {
    displayType === 'inline'
      ? setDisplayType('none')
      : setDisplayType('inline');
  };

  window.onclick = function (event) {
    if (event.target.className === 'modal') {
      resetModal();
    }
  };

  const removeSigner = (signerToDelete) => {
    setSigners((prev) => {
      return prev.filter((signer) => signer.name !== signerToDelete);
    });
    resetModal();
  };

  const resetModal = () => {
    document.getElementById('signerForm').reset();
    setName('');
    setIsMale('');
    setIsManager('');
    setDisplayType('none');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const signer = new Signer(name, isMale, isManager);
    setSigners((prev) => [...prev, signer]);
    resetModal();
  };

  return (
    <div>
      <button onClick={() => showModal()} className="button" name="showModal">
        Cadastrar Gestor
      </button>

      <div style={{ display: displayType }} className="modal">
        <div className="modalBackground"></div>
        <div className="modalContent">
          <form onSubmit={handleSubmit} id="signerForm">
            <strong style={{ fontSize: '20px' }}>
              Insira informações do novo gestor:
            </strong>

            <br />
            <label htmlFor="signerName">Nome:</label>
            <input
              type="text"
              id="signerName"
              onChange={({ target }) => setName(target.value)}
              name="name"
              //   required
            />

            <br />
            <label>Gênero:</label>

            <input
              type="radio"
              onChange={({ target }) => setIsMale(target.value)}
              id="radioSignerMale"
              name="signerGender"
              value={true}
            />
            <label htmlFor="radioSignerMale">Masculino</label>

            <input
              type="radio"
              onChange={({ target }) => setIsMale(target.value)}
              id="radioSignerFemale"
              name="signerGender"
              value={false}
            />
            <label htmlFor="radioSignerFemale">Feminino</label>

            <br />
            <label htmlFor="isManager">Gestor do Contrato</label>
            <input
              type="checkbox"
              onChange={({ target }) => setIsManager(target.value)}
              id="isManager"
            />

            <br />
            <label htmlFor="signerToDelete">Gestores: </label>
            <select
              id="signerToDelete"
              onChange={({ target }) => setSignerToDelete(target.value)}
              defaultValue=""
            >
              <option style={{ display: 'none' }} disabled value="">
                Escolha...
              </option>
              {signers.map((signer, index) => (
                <option value={signer.name} key={index}>
                  {signer.name}
                </option>
              ))}
            </select>
            <input
              type="button"
              name="removeSigner"
              onClick={() => removeSigner(signerToDelete)}
              value="Remover"
            />

            <div>
              <input type="submit" className="button" value="Cadastrar" />
              <input
                type="button"
                className="button"
                onClick={() => resetModal()}
                value="Cancelar"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
