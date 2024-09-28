let cart = [];
let currentItem = {};

function showModal(name, price) {
    currentItem = { name, price };
    document.getElementById('item-name').innerText = name;
    document.getElementById('item-price').innerText = price;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function addToCart() {
    cart.push(currentItem);
    updateCart();
    closeModal();
}

function updateCart() {
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        let li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    document.getElementById('cart-total').innerText = `Total: $${total}`;
}
