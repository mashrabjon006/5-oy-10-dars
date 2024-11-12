document.getElementById('clic').onclick = function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("error-message");

    if (username === "admin" && password === "123456") {
        message.textContent = "welcome";
    } else {
        message.textContent = "login eror or pasword error";
    }
}
