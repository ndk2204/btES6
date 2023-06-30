function Validation() {
    this.checkEmpty = function (value, spanID, message) {
        if (value === "") {
            //chưa hợp lệ - thông báo lỗi
            getID(spanID).innerHTML = message;
            getID(spanID).style.display = "block";
            //trả kết qua false
            return false;
        }
        // dữ liệu hợp lệ
        getID(spanID).innerHTML = "";
        getID(spanID).style.display = "none";
        return true;
    }

    this.checkTaiKhoanTrung = function (value, spanID, message, mangNV) {
        var isExist = mangNV.some(function (nv, index) {
            return nv.taiKhoan === value;
        });
        if (isExist) {
            getID(spanID).innerHTML = message;
            getID(spanID).style.display = "block";
            return false;
        }
        getID(spanID).innerHTML = "";
        getID(spanID).style.display = "none";
        return true;
    }

    this.kituTK = function (value, spanID, message) {
        var pattern = /^[0-9]+$/;
        if (value.match(pattern) && value.length >= 4 && value.length <= 6) {
            getID(spanID).innerHTML = "";
            getID(spanID).style.display = "none";
            return true;
        }
        getID(spanID).innerHTML = message;
        getID(spanID).style.display = "block";
        return false;
    }

    this.checkName = function (value, spanID, message) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if (value.match(pattern)) {
            getID(spanID).innerHTML = "";
            getID(spanID).style.display = "none";
            return true;
        }
        getID(spanID).innerHTML = message;
        getID(spanID).style.display = "block";
        return false;

    }

    this.checkEmail = function (value, spanID, message) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(pattern)) {
            getID(spanID).innerHTML = "";
            getID(spanID).style.display = "none";
            return true;
        }
        getID(spanID).innerHTML = message;
        getID(spanID).style.display = "block";
        return false;
    }

    this.checkMatKhau = function (value, spanID, message) {
        var pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,10}$/;
        if (value.match(pattern)) {
            getID(spanID).innerHTML = "";
            getID(spanID).style.display = "none";
            return true;
        }
        getID(spanID).innerHTML = message;
        getID(spanID).style.display = "block";
        return false;
    }

    this.checkNgay = function (value, spanID, message) {
        var pattern = /^(((0?[1-9]|1[012])\/(0?[1-9]|1\d|2[0-8])|(0?[13456789]|1[012])\/(29|30)|(0?[13578]|1[02])\/31)\/(19|[2-9]\d)\d{2}|0?2\/29\/((19|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([2468][048]|[3579][26])00)))$/;
        if (value.match(pattern)) {
            getID(spanID).innerHTML = "";
            getID(spanID).style.display = "none";
            return true;
        }
        getID(spanID).innerHTML = message;
        getID(spanID).style.display = "block";
        return false;
    }

    this.checkLuong = function (value, spanID, message) {
        if (value >= 1000000 && value <= 20000000) {
            getID(spanID).innerHTML = "";
            getID(spanID).style.display = "none";
            return true;
        }
        getID(spanID).innerHTML = message;
        getID(spanID).style.display = "block";
        return false;
    }

    this.checkChucVu = function (value, spanID, message) {
        if (value === "Chọn chức vụ") {
            getID(spanID).innerHTML = message;
            getID(spanID).style.display = "block";
            return false;
        }
        getID(spanID).innerHTML = "";
        getID(spanID).style.display = "none";
        return true;
    }

    this.checkGio = function (value, spanID, message) {
        if (value >= 80 && value <= 200) {
            getID(spanID).innerHTML = "";
            getID(spanID).style.display = "none";
            return true;
        }
        getID(spanID).innerHTML = message;
        getID(spanID).style.display = "block";
        return false;
    }
}
