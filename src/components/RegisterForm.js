import { useState } from 'react';
import { Employee } from '../models/employee';
import { MemoData } from '../models/memoData';

const places = ['Café do Amanhã', 'Restaurante Ante'];

let employees = [];

export default function RegisterForm({ memoData, setMemoData, signers }) {
  const [displayedEmployees, setDisplayedEmployees] = useState([]);
  const [displayType, setDisplayType] = useState('none');
  const [number, setNumber] = useState('');
  const [signer, setSigner] = useState('');
  const [place, setPlace] = useState('');
  const [name, setName] = useState('');
  const [isMale, setIsMale] = useState('');
  const [id, setId] = useState('');

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

  const areEmployeeFieldsFilled = () => {
    return (
      name !== undefined &&
      name !== '' &&
      isMale !== '' &&
      id !== undefined &&
      id !== ''
    );
  };

  const isEployeeRegistered = (employee) => {
    return (
      displayedEmployees.findIndex((element) => element.id === employee.id) ===
      -1
    );
  };

  const addEmployee = () => {
    const employee = new Employee(name, isMale, id);
    if (areEmployeeFieldsFilled()) {
      if (isEployeeRegistered(employee)) {
        employees.push(employee);
        setDisplayedEmployees((prev) => [...prev, employee]);
        clearEmployeeFields();
      } else {
        alert('Já existe um funcionário com esta identidade');
      }
    } else {
      alert('Preencha os campos dos dados do funcionário');
    }
  };

  const clearEmployeeFields = () => {
    setName('');
    setIsMale('');
    setId('');
    document.getElementById('radioMale').checked = false;
    document.getElementById('radioFemale').checked = false;
  };

  const removeEmployee = (removedEmployee) => {
    employees = employees.filter(
      (employee) => employee.id !== removedEmployee.id
    );
    setDisplayedEmployees((prevState) => {
      return prevState.filter((employee) => employee.id !== removedEmployee.id);
    });
  };

  const resetModal = () => {
    document.getElementById('memoForm').reset();
    clearEmployeeFields();
    employees = [];
    setDisplayedEmployees([]);
    setDisplayType('none');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!areEmployeeFieldsFilled() && employees.length === 0) {
      return alert('Insira pelo menos um funcionário.');
    }

    if (areEmployeeFieldsFilled()) {
      const employee = new Employee(name, isMale, id);
      if (isEployeeRegistered(employee)) {
        employees.push(employee);
      } else {
        return alert(
          'Já existem um funcionário com essa identidade cadastrado'
        );
      }
    }

    const indexOfSigner = signers.findIndex((e) => e.name === signer);
    const memoData = new MemoData(
      number,
      employees,
      place,
      signers[indexOfSigner]
    );

    setMemoData((prev) => ({ ...prev, ...memoData }));
    resetModal();
  };

  return (
    <>
      <button onClick={() => showModal()} className="button" name="showModal">
        Novo Formulário
      </button>

      <div style={{ display: displayType }} className="modal">
        <div className="modalBackground"></div>
        <div className="modalContent">
          <form id="memoForm" onSubmit={handleSubmit}>
            <h3> Insira as informações do funcionário:</h3>

            <label htmlFor="memoNumber">Número:</label>
            <input
              type="text"
              id="memoNumber"
              onChange={({ target }) => setNumber(target.value)}
              name="memoNumber"
              //   required
            />

            <br />
            <label htmlFor="signer">Assinante: </label>
            <select
              id="signer"
              onChange={({ target }) => setSigner(target.value)}
              defaultValue=""
              name="signer"
              //   required
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

            <br />
            <label htmlFor="place">Local de trabalho: </label>
            <select
              id="place"
              onChange={({ target }) => setPlace(target.value)}
              defaultValue=""
              name="place"
              //   required
            >
              <option style={{ display: 'none' }} disabled value="">
                Escolha...
              </option>
              {places.map((place, index) => (
                <option value={place} key={index}>
                  {place}
                </option>
              ))}
            </select>

            <br />

            <label htmlFor="employeeName">Nome:</label>
            <input
              type="text"
              onChange={({ target }) => setName(target.value)}
              id="employeeName"
              name="name"
              value={name}
            />

            <br />
            <label>Gênero:</label>

            <input
              type="radio"
              onChange={({ target }) => setIsMale(target.value)}
              id="radioMale"
              name="gender"
              value={true}
            />
            <label htmlFor="radioMale">Masculino</label>

            <input
              type="radio"
              onChange={({ target }) => setIsMale(target.value)}
              id="radioFemale"
              name="gender"
              value={false}
            />
            <label htmlFor="radioFemale">Feminino</label>

            <br />
            <label htmlFor="employeeId">Identidade:</label>
            <input
              type="text"
              onChange={({ target }) => setId(target.value)}
              id="employeeId"
              name="id"
              value={id}
            />

            <input
              type="button"
              name="addEmployee"
              onClick={() => addEmployee()}
              value="+"
            />

            <div>
              <ul id="employees">
                {displayedEmployees.map((employee, index) => (
                  <li key={index}>
                    {employee.name}
                    <input
                      type="button"
                      name="removeEmployee"
                      onClick={() => removeEmployee(employee)}
                      value="-"
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <input type="submit" className="button" value="Cadastrar" />
              <input
                type="button"
                className="button"
                value="Cancelar"
                onClick={() => resetModal()}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
