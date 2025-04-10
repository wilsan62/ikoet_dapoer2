const cart = JSON.parse(localStorage.getItem("cart")) || [];
const container = document.getElementById("cart-container");
const totalPriceEl = document.getElementById("total-price");

function displayCart() {
  container.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<p>Keranjang kamu kosong!</p>";
    document.querySelector(".cart-summary").style.display = "none";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div>
        <strong>${item.name}</strong><br>
        <small>Rp${item.price.toLocaleString()}</small>
      </div>
      <button onclick="removeItem(${index})">❌</button>
    `;
    container.appendChild(div);
  });

  totalPriceEl.textContent = `Rp${total.toLocaleString()}`;
}

function removeItem(index) {
  cart.splice(index, 1); // Hapus item
  localStorage.setItem("cart", JSON.stringify(cart)); // Simpan ulang
  displayCart(); // Refresh tampilan
}

function checkout() {
  localStorage.setItem("checkoutData", JSON.stringify(cart));
  localStorage.removeItem("cart"); // Kosongkan keranjang
  window.location.href = "receipt.html";
}

window.onload = displayCart;
