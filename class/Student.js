import { Person } from "./Person.js";
class Student extends Person {
    constructor(toan, ly, hoa, ...restPerson) {
        super(...restPerson)
        this.toan = toan;
        this.ly = ly;
        this.hoa = hoa;
        
        this.diemTB = (this.toan + this.hoa + this.ly) / 3
    }
};
export {Student}