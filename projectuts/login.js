document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const storedUser = getCookie("username");
    const storedPass = getCookie("password");
  
    if (username === storedUser && password === storedPass) {
        localStorage.setItem("userLoggedIn", "true");

      alert("Login berhasil!");
      window.location.href = "index.html"; // Halaman utama
    } else {
      alert("Username atau password salah!");
    }
  });
  
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
      const [key, value] = c.split("=");
      if (key === name) return value;
    }
    return "";
  }
  