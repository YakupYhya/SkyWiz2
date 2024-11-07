function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error");
  
    if (username === "admin" && password === "1234") {
      window.location.href = "home.html";
      return false;
    } else {
      errorMessage.textContent = "Kullanıcı adı veya şifre yanlış!";
      return false;
    }
  }
  