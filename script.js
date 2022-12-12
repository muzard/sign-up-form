let confirmed = false;

function checkIfPasswordsMatch() {
  let pw = document.getElementById("pwd");
  let c_pw = document.getElementById("c-pwd");

  let pwd_text = document.getElementById("pwd-text");

  if (pw.value !== c_pw.value) {
    pwd_text.textContent = "Passwords need to match!";

    pw.classList.add("invalid");
    c_pw.classList.add("invalid");
  } else if (pw.value == c_pw.value) {
    pwd_text.textContent = null;

    pw.classList.remove("invalid");
    c_pw.classList.remove("invalid");
  }

  confirmed = true;
}

function firstCheck() {
    if (confirmed) {
        checkIfPasswordsMatch()
    }
}