let chonDS = document.querySelector('#locDS')
document.getElementById("locDS").addEventListener("change", () => {
    switch (chonDS.value) {
        case "Student":
            document.getElementById('tableStudent').style.display = "table"
            document.getElementById('tableEmployee').style.display = "none"
            document.getElementById('tableCustomer').style.display = "none"
            break;
        case "Employee":
            document.getElementById('tableStudent').style.display = "none"
            document.getElementById('tableEmployee').style.display = "table"
            document.getElementById('tableCustomer').style.display = "none"
            break;
        case "Customer":
            document.getElementById('tableStudent').style.display = "none"
            document.getElementById('tableEmployee').style.display = "none"
            document.getElementById('tableCustomer').style.display = "table"
            break;
        default:
            document.getElementById('tableStudent').style.display = "none"
            document.getElementById('tableEmployee').style.display = "none"
            document.getElementById('tableCustomer').style.display = "none"
            break;
    }
})

let chonDT = document.querySelector('#doituong')
document.getElementById("doituong").addEventListener("change", () => {
    switch (chonDT.value) {
        case "Student":
            document.querySelectorAll('.d-all').forEach(element => {
                element.style.display = "block"
            });
            document.querySelectorAll('.d-st').forEach(element => {
                element.style.display = "block"
            });
            document.querySelectorAll('.d-em').forEach(element => {
                element.style.display = "none"
            });
            document.querySelectorAll('.d-cus').forEach(element => {
                element.style.display = "none"
            });
            break;
        case "Employee":
            document.querySelectorAll('.d-all').forEach(element => {
                element.style.display = "block"
            });
            document.querySelectorAll('.d-st').forEach(element => {
                element.style.display = "none"
            });
            document.querySelectorAll('.d-em').forEach(element => {
                element.style.display = "block"
            });
            document.querySelectorAll('.d-cus').forEach(element => {
                element.style.display = "none"
            });
            break;
        case "Customer":
            document.querySelectorAll('.d-all').forEach(element => {
                element.style.display = "block"
            });
            document.querySelectorAll('.d-st').forEach(element => {
                element.style.display = "none"
            });
            document.querySelectorAll('.d-em').forEach(element => {
                element.style.display = "none"
            });
            document.querySelectorAll('.d-cus').forEach(element => {
                element.style.display = "block"
            });
            break;
        default:
            document.querySelectorAll('.form-group').forEach(element => {
                element.style.display = "none"
            });
            break;
    }
})