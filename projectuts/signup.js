document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("signup-username").value.trim();
  const password = document.getElementById("signup-password").value.trim();

  if (username === "" || password === "") {
    alert("Semua kolom wajib diisi!");
    return;
  }

  // Simpan ke cookie untuk 1 hari
  document.cookie = `username=${username}; path=/; max-age=86400`;
  document.cookie = `password=${password}; path=/; max-age=86400`;

  alert("Signup berhasil! Silakan login.");
  window.location.href = "login.html";
});
