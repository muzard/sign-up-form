function checkIfPasswordsMatch() {
    pw = document.getElementById("pwd").value
    c_pw = document.getElementById("c-pwd").value

    pwd_text = document.getElementById("pwd-text").textContent

    if (pw !== pwd) {
        pwd_text = "Passwords need to match!"
    }
}