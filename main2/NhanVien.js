//Khai báo Class
function NhanVien(taiKhoan, hoTen, email, pass, ngayLam, luongCB, chucVu, gioLam) {

    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.pass = pass;
    this.ngayLam = ngayLam;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;

    this.tongLuong = function () {
        switch (this.chucVu) {
            case "Sếp":
                this.tongLuong = luongCB * 3
                break;
            case "Trưởng phòng":
                this.tongLuong = luongCB * 2
                break;
            case "Nhân viên":
                this.tongLuong = luongCB
                break;
            default:
                break;
        }
    }

    this.xepLoai = function () {
        if (gioLam >= 160 && gioLam < 176) {
            this.xepLoai = "Khá"
        }
        else if (gioLam >= 176 && gioLam < 192) {
            this.xepLoai = "Giỏi"
        }
        else if (gioLam >= 192) {
            this.xepLoai = "Xuất sắc"
        }
        else {
            this.xepLoai = "Trung Bình"
        }
    }

}
