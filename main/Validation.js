function getID(id) {
    return document.getElementById(id);
}
class Validation {
    constructor() {
        this.checkEmpty = function (value, spanID, message) {
            if (value === "") {
                getID(spanID).innerHTML = message;
                getID(spanID).style.display = "block";
                return false;
            }
            getID(spanID).innerHTML = "";
            getID(spanID).style.display = "none";
            return true;
        };

        this.checkTaiKhoanTrung = function (value, spanID, message, mangNV) {
            var isExist = mangNV.some(function (nv, index) {
                return nv.ma === value;
            });
            if (isExist) {
                getID(spanID).innerHTML = message;
                getID(spanID).style.display = "block";
                return false;
            }
            getID(spanID).innerHTML = "";
            getID(spanID).style.display = "none";
            return true;
        };

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
        };

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

        };

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
        };

        this.checkLuong = function (value, spanID, message) {
            if (value >= 1000000 && value <= 20000000) {
                getID(spanID).innerHTML = "";
                getID(spanID).style.display = "none";
                return true;
            }
            getID(spanID).innerHTML = message;
            getID(spanID).style.display = "block";
            return false;
        };

        this.danhgia = function (value, spanID, message) {
            if (value === "Chọn đánh giá") {
                getID(spanID).innerHTML = message;
                getID(spanID).style.display = "block";
                return false;
            }
            getID(spanID).innerHTML = "";
            getID(spanID).style.display = "none";
            return true;
        };
    }
}
