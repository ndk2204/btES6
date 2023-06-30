//=======================================================================//
const dsnv = new DanhSachNhanVien();
const validation = new Validation();

function setLocalStorage(mangNV) {
    localStorage.setItem("DSNhanVien", JSON.stringify(mangNV));
}
function getLocalStorage() {
    var dataLocal = JSON.parse(localStorage.getItem("DSNhanVien"));
    if (dataLocal !== null) {
        hienThiTable(dataLocal);
        dsnv.mangNV = dataLocal;
    }
}
getLocalStorage();

//Reset Form =======================================================================//
//Reset thông báo
function resetTB() {
    getID("tbTKNV").style.display = "none";
    getID("tbTen").style.display = "none";
    getID("tbEmail").style.display = "none";
    getID("tbMatKhau").style.display = "none";
    getID("tbNgay").style.display = "none";
    getID("tbLuongCB").style.display = "none";
    getID("tbChucVu").style.display = "none";
    getID("tbGiolam").style.display = "none";
}

getID("btnThem").onclick = function clickThemNV() {
    getID("formNV").reset();
    getID("tknv").disabled = false;
    resetTB();
}

//Them NV =======================================================================//
getID("btnThemNV").onclick = function themNV() {
    var taiKhoan = getValue("tknv")
    var hoTen = getValue("name")
    var email = getValue("email")
    var pass = getValue("password")
    var ngayLam = getValue("datepicker")
    var luongCB = getValue("luongCB")
    var chucVu = getValue("chucvu")
    var gioLam = getValue("gioLam")

    var isValid = true;
    isValid = validation.checkEmpty(taiKhoan, "tbTKNV", "Tài khoản không được để trống")
        && validation.checkTaiKhoanTrung(taiKhoan, "tbTKNV", "Tài khoản không được trùng", dsnv.mangNV)
        && validation.kituTK(taiKhoan, "tbTKNV", "Tài khoản từ 4 - 6 kí tự");

    isValid &= validation.checkEmpty(hoTen, "tbTen", "Tên không được để trống")
        && validation.checkName(hoTen, "tbTen", "Tên chỉ chứa kí tự chữ");

    isValid &= validation.checkEmpty(email, "tbEmail", "Email không được để trống")
        && validation.checkEmail(email, "tbEmail", "Email không đúng định dạng");

    isValid &= validation.checkEmpty(pass, "tbMatKhau", "Mật khẩu không được để trống")
        && validation.checkMatKhau(pass, "tbMatKhau", "Mật khẩu chứa ít nhất 1 ký tự số, 1 kí tự hoa, 1 kí tự đặc biệt (từ 6-10 kí tự)");

    isValid &= validation.checkEmpty(ngayLam, "tbNgay", "Email không được để trống")
        && validation.checkNgay(ngayLam, "tbNgay", "Chưa đúng định dạng mm/dd/yyy");

    isValid &= validation.checkEmpty(luongCB, "tbLuongCB", "Lương không được để trống")
        && validation.checkLuong(luongCB, "tbLuongCB", "Nhập lương CB (1.000.000 - 20.000.000)");

    isValid &= validation.checkEmpty(chucVu, "tbChucVu", "Chức vụ không được để trống")
        && validation.checkChucVu(chucVu, "tbChucVu", "Chưa chọn chức vụ");

    isValid &= validation.checkEmpty(gioLam, "tbGiolam", "Giờ làm không được để trống")
        && validation.checkGio(gioLam, "tbGiolam", "Nhập giờ làm (80 - 200 giờ)");

    if (isValid) {
        var nv = new NhanVien(taiKhoan, hoTen, email, pass, ngayLam, luongCB, chucVu, gioLam)
        // console.log(taiKhoan, hoTen, email, pass, ngayLam, luongCB, chucVu, gioLam)
        nv.tongLuong();
        nv.xepLoai();
        dsnv.themNV(nv)

        hienThiTable(dsnv.mangNV)
        setLocalStorage(dsnv.mangNV)
    }
}

//=======================================================================//
function hienThiTable(mangNV) {
    var thongTinNV = "";

    mangNV.map(function (nv, index) {
        var trNV = `<tr>
            <td>${nv.taiKhoan}</td>
            <td>${nv.hoTen}</td>
            <tr>
            <td>Điểm</td>
            </tr>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.xepLoai}</td>
            <td class = "col-2">
            <button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')">Xóa</button>
            <button class="btn btn-warning" data-toggle="modal"
            data-target="#myModal" onclick="xemThongTin('${nv.taiKhoan}')" >Xem</button>
            </td>
        </tr>`
        thongTinNV += trNV
    })
    getID("tableDanhSach").innerHTML = thongTinNV;
}

//Xoa NV =======================================================================//
function xoaNhanVien(taiKhoan) {
    dsnv.xoaNV(taiKhoan);

    hienThiTable(dsnv.mangNV);
    setLocalStorage(dsnv.mangNV);
}

//Xem NV =======================================================================//
function xemThongTin(taiKhoan) {
    var indexFind = dsnv.timIndex(taiKhoan);
    var nvFind = dsnv.mangNV[indexFind];
    // console.log(nvFind)
    resetTB();

    getID("tknv").value = nvFind.taiKhoan;
    getID("tknv").disabled = true
    getID("name").value = nvFind.hoTen
    getID("email").value = nvFind.email
    getID("password").value = nvFind.pass
    getID("datepicker").value = nvFind.ngayLam
    getID("luongCB").value = nvFind.luongCB
    getID("chucvu").value = nvFind.chucVu
    getID("gioLam").value = nvFind.gioLam
}

//Cap nhat NV =======================================================================//
getID("btnCapNhat").onclick = function capNhat() {
    var taiKhoan = getValue("tknv")
    var hoTen = getValue("name")
    var email = getValue("email")
    var pass = getValue("password")
    var ngayLam = getValue("datepicker")
    var luongCB = getValue("luongCB")
    var chucVu = getValue("chucvu")
    var gioLam = getValue("gioLam")

    var isValid = true;

    isValid &= validation.checkEmpty(hoTen, "tbTen", "Tên không được để trống")
        && validation.checkName(hoTen, "tbTen", "Tên chỉ chứa kí tự chữ");

    isValid &= validation.checkEmpty(email, "tbEmail", "Email không được để trống")
        && validation.checkEmail(email, "tbEmail", "Email không đúng định dạng");

    isValid &= validation.checkEmpty(pass, "tbMatKhau", "Mật khẩu không được để trống")
        && validation.checkMatKhau(pass, "tbMatKhau", "Mật khẩu chứa ít nhất 1 ký tự số, 1 kí tự hoa, 1 kí tự đặc biệt (từ 6-10 kí tự)");

    isValid &= validation.checkEmpty(ngayLam, "tbNgay", "Email không được để trống")
        && validation.checkNgay(ngayLam, "tbNgay", "Chưa đúng định dạng mm/dd/yyy");

    isValid &= validation.checkEmpty(luongCB, "tbLuongCB", "Lương không được để trống")
        && validation.checkLuong(luongCB, "tbLuongCB", "Nhập lương CB (1.000.000 - 20.000.000)");

    isValid &= validation.checkEmpty(chucVu, "tbChucVu", "Chức vụ không được để trống")
        && validation.checkChucVu(chucVu, "tbChucVu", "Chưa chọn chức vụ");

    isValid &= validation.checkEmpty(gioLam, "tbGiolam", "Giờ làm không được để trống")
        && validation.checkGio(gioLam, "tbGiolam", "Nhập giờ làm (80 - 200 giờ)");


    if (isValid) {
        var nv = new NhanVien(taiKhoan, hoTen, email, pass, ngayLam, luongCB, chucVu, gioLam)
        nv.tongLuong();
        nv.xepLoai();

        dsnv.capNhatNV(nv);
        setLocalStorage(dsnv.mangNV);
        hienThiTable(dsnv.mangNV);
    }
}