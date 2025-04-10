// Data produk
const products = [
  {
    id: 1,
    name: "wonton chili oil",
    price: 10000,
    image: "images/wonton.jpg"
  },
  {
    id: 2,
    name: "risol mayo",
    price: 10000,
    image: "images/risolmayo.jpg"
  },
  {
    id: 3,
    name: "es teh manis",
    price: 5000,
    image: "images/es teh.jpg"
  }
];

// Render produk ke HTML
const productList = document.getElementById("product-list");

products.forEach(product => {
  const item = document.createElement("div");
  item.className = "product-item";
  item.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>Rp${product.price.toLocaleString("id-ID")}</p>
    <button onclick="addToCart(${product.id})">Tambah ke Keranjang</button>
  `;
  productList.appendChild(item);
});

// Simpan keranjang di localStorage
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === productId);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} ditambahkan ke keranjang!`);
}

// Tampilkan isi keranjang (sementara pakai alert)
function viewCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Keranjang kosong.");
    return;
  }

  let cartList = "Isi keranjang:\n";
  cart.forEach((item, index) => {
    cartList += `${index + 1}. ${item.name} - Rp${item.price.toLocaleString("id-ID")}\n`;
  });
  alert(cartList);
}
