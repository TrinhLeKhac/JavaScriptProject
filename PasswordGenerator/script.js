let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLength = 12;
let password=document.getElementById("password");

function genPassword() {
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    document.getElementById("password").value = password;
}

function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, passwordLength+1);
}