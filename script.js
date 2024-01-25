const img = document.getElementById("img");
const password = document.getElementById("password");



img.onclick = function(){
    if(password.type == "password"){
        password.type = "text"
        img.src = "./eye-open.png";
    }
    else{
        password.type = "password";
        img.src = "./eye-close.png";
    }
}