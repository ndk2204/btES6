import { Student } from "../class/Student.js"
import { Employee } from "../class/Employee.js"
import { Customer } from "../class/Customer.js"
import { ListPerson } from "../class/ListPerson.js"

const dsnd = new ListPerson();
const validation = new Validation();

const getValue = (id) => {
    return document.getElementById(id).value;
}
const setLocalStorage = (tenmang, mangND) => {
    localStorage.setItem(tenmang, JSON.stringify(mangND));
}

function getLocalStorage(tenmang) {
    let dataLocal = JSON.parse(localStorage.getItem(tenmang));
    if (dataLocal !== null) {
        switch (tenmang) {
            case "DsStudent":
                hienThi(tenmang, dataLocal)
                dsnd.student = dataLocal
                break;
            case "DsEmployee":
                hienThi(tenmang, dataLocal)
                dsnd.employee = dataLocal
                break;
            case "DsCustomer":
                hienThi(tenmang, dataLocal)
                dsnd.customer = dataLocal
                break;
            default:
                break;
        }
    }
}
getLocalStorage("DsStudent");
getLocalStorage("DsEmployee");
getLocalStorage("DsCustomer");

//Them  =======================================================================//

document.getElementById("btnThemND").addEventListener('click', () => {
    let ma = getValue("ma")
    let hoten = getValue("name")
    let email = getValue("email")
    let diachi = getValue("diachi")
    let toan = getValue("toan")
    let ly = getValue("ly")
    let hoa = getValue("hoa")
    let songay = getValue("songay")
    let luongngay = getValue("luongngay")
    let tencongty = getValue("tencongty")
    let hoadon = getValue("hoadon")
    let danhgia = getValue("danhgia")

    var isValid = true;
    isValid = validation.checkEmpty(ma, "tbma", "Tài khoản không được để trống")
        && validation.kituTK(ma, "tbma", "Tài khoản từ 4 - 6 kí tự");
    isValid &= validation.checkEmpty(hoten, "tbTen", "Tên không được để trống")
        && validation.checkName(hoten, "tbTen", "Tên chỉ chứa kí tự chữ");
    isValid &= validation.checkEmpty(email, "tbEmail", "Email không được để trống")
        && validation.checkEmail(email, "tbEmail", "Email không đúng định dạng");
    if (isValid) {

        const chonDT = document.querySelector('#doituong').value
        switch (chonDT) {
            case "Student":
                isValid &= validation.checkTaiKhoanTrung(ma, "tbma", "Tài khoản không được trùng", dsnd.student)
                isValid &= validation.checkEmpty(toan, "tbtoan", "Điểm không được để trống")
                isValid &= validation.checkEmpty(ly, "tbly", "Điểm không được để trống")
                isValid &= validation.checkEmpty(hoa, "tbhoa", "Điểm không được để trống")

                if (isValid) {
                    let nd = new Student(toan, ly, hoa, hoten, diachi, ma, email)
                    dsnd.themST(nd)
                    setLocalStorage("DsStudent", dsnd.student)
                    hienThi("DsStudent", dsnd.student)
                }
                break;
            case "Employee":
                isValid &= validation.checkTaiKhoanTrung(ma, "tbma", "Tài khoản không được trùng", dsnd.employee)
                isValid &= validation.checkEmpty(songay, "tbsongay", "Số ngày không được để trống")
                isValid &= validation.checkEmpty(luongngay, "tbluongngay", "Lương không được để trống")
                    && validation.checkLuong(luongngay, "tbluongngay", "Nhập lương CB (1.000.000 - 20.000.000)");

                if (isValid) {
                    let nd2 = new Employee(songay, luongngay, hoten, diachi, ma, email)
                    dsnd.themEM(nd2)
                    setLocalStorage("DsEmployee", dsnd.employee)
                    hienThi("DsEmployee", dsnd.employee)
                }
                break;
            case "Customer":
                isValid &= validation.checkTaiKhoanTrung(ma, "tbma", "Tài khoản không được trùng", dsnd.customer)
                isValid &= validation.checkEmpty(tencongty, "tbtencongty", "Tên công ty không được để trống")
                isValid &= validation.checkEmpty(hoadon, "tbhoadon", "Hóa đơn không được để trống")
                isValid &= validation.danhgia(danhgia, "tbdanhgia", "Chưa chọn đánh giá")

                if (isValid) {
                    let nd3 = new Customer(tencongty, hoadon, danhgia, hoten, diachi, ma, email)
                    dsnd.themCU(nd3)
                    setLocalStorage("DsCustomer", dsnd.customer)
                    hienThi("DsCustomer", dsnd.customer)
                }
                break;
            default:
                break;
        }
    }
})
//Hien thi =======================================================================//

function hienThi(check, mangND) {
    switch (check) {
        case "DsStudent":
            let contentST = "";
            mangND.map(function (nd, index) {
                let trND = `<tr>
                <td>${nd.ma}</td>
                <td>${nd.hoten}</td>
                <td>${nd.email}</td>
                <td>${nd.diachi}</td>
                <td>${nd.toan}</td>
                <td>${nd.ly}</td>
                <td>${nd.hoa}</td>
                <td id=diem${nd.ma}></td>
                <td class = "col-2">
                <button class="btn btn-success" onclick="diemTB('${nd.ma}')">Tính điểm TB</button>
                <button class="btn btn-danger" onclick="xoa('${nd.ma}')">Xóa</button>
                <button class="btn btn-warning" data-toggle="modal"
                data-target="#myModal" onclick="xem('${nd.ma}')" >Xem</button>
                </td>
                    </tr>`
                contentST += trND
            })
            document.getElementById("DSStudent").innerHTML = contentST;
            break;

        case "DsEmployee":
            let contentEM = "";
            mangND.map(function (nd, index) {
                let trND = `<tr>
                <td>${nd.ma}</td>
                <td>${nd.hoten}</td>
                <td>${nd.email}</td>
                <td>${nd.diachi}</td>
                <td>${nd.songay}</td>
                <td>${nd.luongngay}</td>
                <td id=tongluong${nd.ma}></td>
                <td class = "col-2">
                <button class="btn btn-success" onclick="tinhLuong('${nd.ma}')">Tính Lương</button>
                <button class="btn btn-danger" onclick="xoa('${nd.ma}')">Xóa</button>
                <button class="btn btn-warning" data-toggle="modal"
                data-target="#myModal" onclick="xem('${nd.ma}')" >Xem</button>
                </td>
                    </tr>`
                contentEM += trND
            })
            document.getElementById("DSEmployee").innerHTML = contentEM;
        case "DsCustomer":
            let contentCU = "";
            mangND.map(function (nd, index) {
                let trND = `<tr>
                <td>${nd.ma}</td>
                <td>${nd.hoten}</td>
                <td>${nd.email}</td>
                <td>${nd.diachi}</td>
                <td>${nd.tencongty}</td>
                <td>${nd.hoadon}</td>
                <td>${nd.danhgia}</td>
                <td class = "col-2">
                <button class="btn btn-danger" onclick="xoa(${nd.ma})">Xóa</button>
                <button class="btn btn-warning" data-toggle="modal"
                data-target="#myModal" onclick="xem(${nd.ma})" >Xem</button>
                </td>
                    </tr>`
                contentCU += trND
            })
            document.getElementById("DSCustomer").innerHTML = contentCU;
        default:
            break;
    }
}
//Xoa NV =======================================================================//

window.xoa = xoa;
function xoa(ma) {
    let chonDS = document.querySelector('#locDS').value

    switch (chonDS) {
        case "Student":
            let indexFind;
            dsnd.student.map(function (nd, index) {
                if (nd.ma == ma) {
                    indexFind = index;
                }
            })
            dsnd.student.splice(indexFind, 1);
            setLocalStorage("DsStudent", dsnd.student)
            hienThi("DsStudent", dsnd.student)
            break;
        case "Employee":
            let indexFind2;
            dsnd.employee.map(function (nd, index) {
                if (nd.ma == ma) {
                    indexFind2 = index;
                }
            })
            dsnd.employee.splice(indexFind2, 1);
            setLocalStorage("DsEmployee", dsnd.employee)
            hienThi("DsEmployee", dsnd.employee)
            break;
        case "Customer":
            let indexFind3;

            dsnd.customer.map(function (nd, index) {
                if (nd.ma == ma) {
                    indexFind3 = index;
                }
            })
            dsnd.customer.splice(indexFind3, 1);
            setLocalStorage("DsCustomer", dsnd.customer)
            hienThi("DsCustomer", dsnd.customer)
            break;
        default:
            break;
    }

}
//Reset Form =======================================================================//

const resetTB = () => {
    document.getElementById("tbma").style.display = "none";
    document.getElementById("tbTen").style.display = "none";
    document.getElementById("tbEmail").style.display = "none";
    document.getElementById("tbdiachi").style.display = "none";
    document.getElementById("tbtoan").style.display = "none";
    document.getElementById("tbly").style.display = "none";
    document.getElementById("tbhoa").style.display = "none";
    document.getElementById("tbsongay").style.display = "none";
    document.getElementById("tbluongngay").style.display = "none";
    document.getElementById("tbtencongty").style.display = "none";
    document.getElementById("tbhoadon").style.display = "none";
    document.getElementById("tbdanhgia").style.display = "none";
}
getID("btnThem").onclick = function clickThem() {
    document.getElementById("doituong").style.display = "block";

    document.querySelectorAll('.d-all').forEach(element => {
        element.style.display = "none"
    });
    document.querySelectorAll('.d-st').forEach(element => {
        element.style.display = "none"
    });
    document.querySelectorAll('.d-em').forEach(element => {
        element.style.display = "none"
    });
    document.querySelectorAll('.d-cus').forEach(element => {
        element.style.display = "none"
    });
    getID("formND").reset();
    getID("ma").disabled = false;
    resetTB();
}

window.xem = xem;
function xem(ma) {
    let chonDS = document.querySelector('#locDS').value
    document.getElementById("doituong").style.display = "none"
    resetTB();
    document.querySelectorAll('.d-all').forEach(element => {
        element.style.display = "block"
    });
    switch (chonDS) {
        case "Student":
            document.querySelector('#doituong').value = "Student"
            document.querySelectorAll('.d-st').forEach(element => {
                element.style.display = "block"
            });
            document.querySelectorAll('.d-em').forEach(element => {
                element.style.display = "none"
            });
            document.querySelectorAll('.d-cus').forEach(element => {
                element.style.display = "none"
            });
            let indexFind;
            dsnd.student.map(function (nd, index) {
                if (nd.ma == ma) {
                    indexFind = index;
                }
            })
            let nd = dsnd.student[indexFind];
            document.getElementById("ma").value = nd.ma;
            document.getElementById("ma").disabled = true
            document.getElementById("name").value = nd.hoten
            document.getElementById("email").value = nd.email
            document.getElementById("diachi").value = nd.diachi
            document.getElementById("toan").value = nd.toan
            document.getElementById("ly").value = nd.ly
            document.getElementById("hoa").value = nd.hoa
            break;

        case "Employee":
            document.querySelector('#doituong').value = "Employee"
            document.querySelectorAll('.d-st').forEach(element => {
                element.style.display = "none"
            });
            document.querySelectorAll('.d-em').forEach(element => {
                element.style.display = "block"
            });
            document.querySelectorAll('.d-cus').forEach(element => {
                element.style.display = "none"
            });
            let indexFind2;
            dsnd.employee.map(function (nd, index) {
                if (nd.ma == ma) {
                    indexFind2 = index;
                }
            })
            let nd2 = dsnd.employee[indexFind2];
            document.getElementById("ma").value = nd2.ma;
            document.getElementById("ma").disabled = true
            document.getElementById("name").value = nd2.hoten
            document.getElementById("email").value = nd2.email
            document.getElementById("diachi").value = nd2.diachi
            document.getElementById("songay").value = nd2.songay
            document.getElementById("luongngay").value = nd2.luongngay
            break;

        case "Customer":
            document.querySelector('#doituong').value = "Customer"
            document.querySelectorAll('.d-st').forEach(element => {
                element.style.display = "none"
            });
            document.querySelectorAll('.d-em').forEach(element => {
                element.style.display = "none"
            });
            document.querySelectorAll('.d-cus').forEach(element => {
                element.style.display = "block"
            });
            let indexFind3;
            dsnd.customer.map(function (nd, index) {
                if (nd.ma == ma) {
                    indexFind3 = index;
                }
            })
            let nd3 = dsnd.customer[indexFind3];
            document.getElementById("ma").value = nd3.ma;
            document.getElementById("ma").disabled = true
            document.getElementById("name").value = nd3.hoten
            document.getElementById("email").value = nd3.email
            document.getElementById("diachi").value = nd3.diachi
            document.getElementById("tencongty").value = nd3.tencongty
            document.getElementById("hoadon").value = nd3.hoadon
            document.getElementById("danhgia").value = nd3.danhgia
            break;
        default:
            break;
    }

}

document.getElementById("btnCapNhat").addEventListener('click', () => {
    let ma = getValue("ma")
    let hoten = getValue("name")
    let email = getValue("email")
    let diachi = getValue("diachi")
    let toan = getValue("toan")
    let ly = getValue("ly")
    let hoa = getValue("hoa")
    let songay = getValue("songay")
    let luongngay = getValue("luongngay")
    let tencongty = getValue("tencongty")
    let hoadon = getValue("hoadon")
    let danhgia = getValue("danhgia")

    let isValid = true;
    isValid = validation.checkEmpty(ma, "tbma", "Tài khoản không được để trống")
        && validation.kituTK(ma, "tbma", "Tài khoản từ 4 - 6 kí tự");
    isValid &= validation.checkEmpty(hoten, "tbTen", "Tên không được để trống")
        && validation.checkName(hoten, "tbTen", "Tên chỉ chứa kí tự chữ");
    isValid &= validation.checkEmpty(email, "tbEmail", "Email không được để trống")
        && validation.checkEmail(email, "tbEmail", "Email không đúng định dạng");
    if (isValid) {

        let chonDS = document.querySelector('#locDS').value
        switch (chonDS) {
            case "Student":
                isValid &= validation.checkEmpty(toan, "tbtoan", "Điểm không được để trống")
                isValid &= validation.checkEmpty(ly, "tbly", "Điểm không được để trống")
                isValid &= validation.checkEmpty(hoa, "tbhoa", "Điểm không được để trống")

                if (isValid) {
                    let nd = new Student(toan, ly, hoa, hoten, diachi, ma, email)
                    let indexFind;
                    dsnd.student.map(function (nd, index) {
                        if (nd.ma == ma) {
                            indexFind = index;
                        }
                    })
                    dsnd.student[indexFind] = nd;
                    setLocalStorage("DsStudent", dsnd.student)
                    hienThi("DsStudent", dsnd.student)
                    break;
                }
            case "Employee":
                isValid &= validation.checkEmpty(songay, "tbsongay", "Số ngày không được để trống")
                isValid &= validation.checkEmpty(luongngay, "tbluongngay", "Lương không được để trống")
                    && validation.checkLuong(luongngay, "tbluongngay", "Nhập lương CB (1.000.000 - 20.000.000)");

                if (isValid) {
                    let nd2 = new Employee(songay, luongngay, hoten, diachi, ma, email)
                    let indexFind2;
                    dsnd.employee.map(function (nd, index) {
                        if (nd.ma == ma) {
                            indexFind2 = index;
                        }
                    })
                    dsnd.employee[indexFind2] = nd2;
                    setLocalStorage("DsEmployee", dsnd.employee)
                    hienThi("DsEmployee", dsnd.employee)
                }
                break;
            case "Customer":
                isValid &= validation.checkEmpty(tencongty, "tbtencongty", "Tên công ty không được để trống")
                isValid &= validation.checkEmpty(hoadon, "tbhoadon", "Hóa đơn không được để trống")
                isValid &= validation.danhgia(danhgia, "tbdanhgia", "Chưa chọn đánh giá")

                if (isValid) {
                    let nd3 = new Customer(tencongty, hoadon, danhgia, hoten, diachi, ma, email)
                    let indexFind3;
                    dsnd.customer.map(function (nd, index) {
                        if (nd.ma == ma) {
                            indexFind3 = index;
                        }
                    })
                    dsnd.customer[indexFind3] = nd3;
                    setLocalStorage("DsCustomer", dsnd.customer)
                    hienThi("DsCustomer", dsnd.customer)
                }
                break;
            default:
                break;
        }
    }
})
window.diemTB = diemTB;
function diemTB(ma) {
    let indexFind;
    dsnd.student.map(function (nd, index) {
        if (nd.ma == ma) {
            indexFind = index;
        }
    })
    let diem = dsnd.student[indexFind].diemTB
    document.getElementById('diem' + ma).innerHTML = diem
}

window.tinhLuong = tinhLuong;
function tinhLuong(ma) {
    let indexFind;
    dsnd.employee.map(function (nd, index) {
        if (nd.ma == ma) {
            indexFind = index;
        }
    })
    let luong = dsnd.employee[indexFind].tinhLuong
    document.getElementById('tongluong' + ma).innerHTML = luong.toLocaleString('en-US')
}
document.getElementById('btnSapXep').addEventListener('click', () => {
    let chonDS = document.querySelector('#locDS').value
    switch (chonDS) {
        case "Student":
            let arrNew = dsnd.student.slice();
            let result = arrNew.sort(function (nd2, nd1) {
                return nd2.hoten.toLowerCase().localeCompare(nd1.hoten.toLowerCase());;
            })
            hienThi("DsStudent", result)
            break;
        case "Employee":
            let arrNew2 = dsnd.employee.slice();
            let result2 = arrNew2.sort(function (nd2, nd1) {
                console.log(nd2.hoten)
                console.log(nd1.hoten)

                return nd2.hoten.localeCompare(nd1.hoten);;
            })
            hienThi("DsEmployee", result2)
            break;
        case "Customer":
            let arrNew3 = dsnd.customer.slice();
            let result3 = arrNew3.sort(function (nd2, nd1) {

                return nd2.hoten.toLowerCase().localeCompare(nd1.hoten.toLowerCase());;
            })
            hienThi("DsCustomer", result3)
            break;
        default:
            break;
    }
})