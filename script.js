// var ;
// let;
// const;
// function;

// var int sss = 1234
// var string sss = 1234
// String = letter
// Boolean = true, false
// Intiger = 135454
// float = 3.4

// = -> key = value
// key = salam

// == -> check key for value
// if (key == value)

// === -> check key type and key value 
//  mynumber = 1234

function login() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    if (username.value === "admin" && password.value === "s1234") {
        alert("خوش آمدید");
    } else {
        alert("نام کاربری یا رمز عبور اشتباه است");
    }
}

function openMenu(){
    const menu = document.getElementById("mobileMenu");
    menu.style.transform = "translate(0, 0)";
}

function closeMenu(){
    const menu = document.getElementById("mobileMenu");
    menu.style.transform = "translate(360px, 0)";
}