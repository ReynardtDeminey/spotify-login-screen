function SignUpButton(){
    let x = document.getElementById("sign-up");
    let button = document.getElementById("button")
    if (x.style.display === "none"){
        x.style.display = "block"
    }
    button.innerHTML = "SIGN UP"    
}

function SignInButton(){
    let x = document.getElementById("sign-up");
    let button = document.getElementById("button")
    if (x.style.display === "block"){
        x.style.display = "none"
    }    
    button.innerHTML = "SIGN IN"
}