class ListPerson {
    constructor() {

        this.student = [];
        this.employee = [];
        this.customer = [];

        this.themST = (nd) => {
            this.student.push(nd);
        };
        this.themEM = (nd) => {
            this.employee.push(nd);
        };
        this.themCU = (nd) => {
            this.customer.push(nd);
        };
    }
}
export { ListPerson }