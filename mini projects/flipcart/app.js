let cart = [];

function addToCart(productTitle) {
    if (cart.includes(productTitle)) {
        alert(`${productTitle} is already in your cart!`);
    } else {
        cart.push(productTitle);
        console.log(cart);
        updateCartCount();
        alert(`${productTitle} has been added to your cart!`);
    }
}


function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    cartCountElement.textContent = cart.length;
}

function filterProducts() {
    const searchInput = document.getElementById('search_input').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productTitle = product.querySelector('.product-title').textContent.toLowerCase();
        if (productTitle.includes(searchInput)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

document.querySelectorAll('.addtocart').forEach((button, index) => {
    button.addEventListener('click', () => {
        const productTitle = document.querySelectorAll('.product-title')[index].textContent;
        addToCart(productTitle);
    });
});

document.getElementById('search_input').addEventListener('input', filterProducts);
