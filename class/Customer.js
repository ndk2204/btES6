import { Person } from "./Person.js";
class Customer extends Person {
    constructor(tencongty, hoadon, danhgia, ...restPerson) {
        super(...restPerson)
        this.tencongty = tencongty;
        this.hoadon = hoadon;
        this.danhgia = danhgia;
    }
};
export { Customer } 