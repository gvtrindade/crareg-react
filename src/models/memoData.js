export class MemoData {
  constructor(number, employees, place, signer) {
    this.number = number;    
    this.employees = employees;
    this.place = place;
    this.signer = signer;
    this.setDate();
    this.setSignerRole();
    this.setEmployeesInfo();
    this.setEmployeesBond();
    this.setEmployeesRole();
  }

  getMonthString(month) {
    const months = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];
    return months[month];
  }

  setDate() {
    this.currentDay =
      (new Date().getDate() < 10 ? '0' : '') + new Date().getDate();
    this.currentMonth = this.getMonthString(new Date().getMonth());
    this.currentYear = new Date().getFullYear();
  }

  setEmployeesInfo() {
    const employeesInfo = [];
    this.employees.forEach((employee) =>
      employeesInfo.push(
        ` ${employee.name}, sob identidade número ${employee.id},`
      )
    );
    this.employeesInfo = employeesInfo.join('');
  }

  setEmployeesBond() {
    if (this.employees.length > 1) {
      this.employees.some((employee) => employee.isMale === 'true')
        ? (this.employeesBond = 'vinculados')
        : (this.employeesBond = 'vinculadas');
    } else {
      this.employees[0].isMale === 'true'
        ? (this.employeesBond = 'vinculado')
        : (this.employeesBond = 'vinculada');
    }
  }

  setEmployeesRole() {
    this.employees.length > 1
      ? (this.employeesRole = 'desempenharão')
      : (this.employeesRole = 'desempenhará');
  }

  setSignerRole() {
    const isManager = this.signer.isManager === 'on';
    const isMale = this.signer.isMale === 'true';

    if (isManager && isMale) {
      this.signerRole = 'Gestor do Contrato';
    } else if (isManager && !isMale) {
      this.signerRole = 'Gestora do Contrato';
    } else if (!isManager && isMale) {
      this.signerRole = 'Subgestor do Contrato';
    } else {
      this.signerRole = 'Subgestora do Contrato';
    }
  }
}
