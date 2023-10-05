const products = [
    {
        id: 1,
        name: "Product 1",
        price: 19.99,
        category: "Electronics",
    },
    {
        id: 2,
        name: "Product 2",
        price: 29.99,
        category: "Clothing",
    },
];
const cart = [];
function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.className = "product-item";
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Category: ${product.category}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}
function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}
function updateCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";
    cart.forEach((product) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
        `;
        cartList.appendChild(cartItem);
    });
}
function init() {
    displayProducts();
    updateCart();
}
window.onload = init;
