// const dsnd = new DanhSachNguoiDung();
function getID(id) {
    return document.getElementById(id);
}
function getValue(id) {
    return document.getElementById(id).value;
}
function setLocalStorage(mangNV) {
    localStorage.setItem("DSNguoiDung", JSON.stringify(mangND));
}
function getLocalStorage() {
    var dataLocal = JSON.parse(localStorage.getItem("DSNguoiDung"));
    if (dataLocal !== null) {
        // hienThiTable(dataLocal);
        dsnd.mangND = dataLocal;
    }
}
getLocalStorage();

//Them NV =======================================================================//














