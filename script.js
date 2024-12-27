function displayInfo(){
    let cnic = document.getElementById("CNIC").value;
    localStorage.setItem("CNIC", cnic);
    let gen = document.getElementById("gen").value;
    localStorage.setItem("Gender", gen);
    let date = document.getElementById("date").value;
    localStorage.setItem("Date", date);
    let city = document.getElementById("city").value;
    localStorage.setItem("City", city);
    let mn = document.getElementById("mothername").value;
    localStorage.setItem("MotherName", mn);
    let fname = document.getElementById("father").value;
    localStorage.setItem("Father Name", fname);
    let kn = document.getElementById("kinName").value;
    localStorage.setItem("KIN Name", kn);
    let knn =document.getElementById("kin-num").value;
    localStorage.setItem("KIN Number", knn);
    let nan = document.getElementById("nationality").value;
    localStorage.setItem("Nationality", nan);
    let tax = document.getElementById("tax").value;
    localStorage.setItem("Tax Residency ", tax);
}