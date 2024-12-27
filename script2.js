function displayInfo(){
    let ph = document.getElementById("ph-num").value;
    localStorage.setItem("Phone:", ph);
    let acc = document.getElementById("acc").value;
    localStorage.setItem("Account Type:", acc);
    let acc2 = document.getElementById("Oacc").value;
    localStorage.setItem("Owner of Acc.", acc2);
    let pro = document.getElementById("prof").value;
    localStorage.setItem("Profession", pro);
    let zcode = document.getElementById("zipcode").value;
    localStorage.setItem("Zip-Code", zcode);
    let reg = document.getElementById("region").value;
    localStorage.setItem("Region", reg);
    let edu = document.getElementById("edu").value;
    localStorage.setItem("Education", edu);
    let ccity = document.getElementById("ccity").value;
    localStorage.setItem("Current City", ccity);
    let c = document.getElementById("cntry").value;
    localStorage.setItem("Country", c);

}