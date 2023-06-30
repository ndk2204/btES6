import { Person } from "./Person.js";
class Customer extends Person {
    constructor(tenCty, giaHD, danhGia, ...restPerson) {
        super(...restPerson)
        this.tenCty = tenCty;
        this.giaHD = giaHD;
        this.danhGia = danhGia;
    }
};
export { Customer } 