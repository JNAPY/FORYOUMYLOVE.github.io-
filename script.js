document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;

    if (password === "06.04.2023") {
        window.location.href = "index.html";
    } else {
        let loginHint = document.getElementById('login-hint');
        loginHint.textContent = "Our anniversary date xx/xx/xxxx";
    }
});