var userEmail = document.getElementById("userPrincipal");
var password = document.getElementById("password");

var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
var expReg2 = /^[a-z0-9]^/;

function login(){

    let tag = document.getElementById("#emailHelp")

    if(expReg.test(userEmail.value) && password.value !=""){

        if(userEmail.value == "bdjdl@gmail.com")
        location.href = "../html/page2.html";
        else
        location.href = "../html/votaciones.html";

    }else{
        userEmail.style.border = "red solid 2px";
    }
}
