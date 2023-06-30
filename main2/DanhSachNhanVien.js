function DanhSachNhanVien() {
    this.mangNV = [];

    //Phương thức thêm
    this.themNV = function (nv) {
        this.mangNV.push(nv);
    }

    //Tìm index
    this.timIndex = function (taiKhoan) {
        var indexFind;
        this.mangNV.map(function (nv, index) {
            if (nv.taiKhoan === taiKhoan) {
                indexFind = index;
            }
        })
        return indexFind;
    }

    //Phương thức xóa
    this.xoaNV = function (taiKhoan) {
        var indexFind = this.timIndex(taiKhoan);
        this.mangNV.splice(indexFind, 1);
    }

    //Phương thức cập nhật
    this.capNhatNV = function (nv) {
        var indexFind = this.timIndex(nv.taiKhoan);
        this.mangNV[indexFind] = nv;
    }

    //Phương thức tìm kiếm
    this.timLoaiNV = function (loaiTim) {
        var mangTK = [];
        //chuyển sang chữ thường + khoảng trắng
        var loaiTimReplace = loaiTim.toLowerCase().replace(/\s/g, "");

        this.mangNV.map(function (nv, index) {
            var loaiReplace = nv.xepLoai.toLowerCase().replace(/\s/g, "");
            var result = loaiReplace.indexOf(loaiTimReplace);
            if (result > -1) {
                mangTK.push(nv);
            }
        });
        return mangTK;
    }


}

