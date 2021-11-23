export class MemoData {
    constructor(number, employees, place, signer){
        this.currentDay = (new Date().getDate() < 10 ? '0' : '') + new Date().getDate();
        this.currentMonth = this.getMonthString(new Date().getMonth());
        this.currentYear = new Date().getFullYear();
        this.number = number;
        this.employees = employees;
        this.place = place;
        this.signer = signer;
    }

    getMonthString(month) {
        const months = [
            'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
            'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
        ];
        return months[month];
    }

}