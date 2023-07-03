import { Person } from "./Person.js";
class Employee extends Person {
    constructor(songay, luongngay, ...restPerson) {
        super(...restPerson)
        this.songay = songay;
        this.luongngay = luongngay;
        this.tinhLuong = this.songay * this.luongngay
    }
};
export {Employee}
