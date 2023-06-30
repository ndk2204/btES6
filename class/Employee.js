import { Person } from "./Person.js";
class Employee extends Person {
    constructor(soNgay, luongNgay, ...restPerson) {
        super(...restPerson)
        this.soNgay = soNgay;
        this.luongNgay = luongNgay;

        this.tinhLuong = this.soNgay * this.luongNgay
    }
};
export {Employee}
