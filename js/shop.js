let products = [];
let cart = [];

fetch('js/products.json')
    .then(response => {
        if(!response.ok) {
            throw new Error('Error loading Products');
        }
        return response.json();
    })
    .then(data => {
        products = data;
    })
    .catch(error => {
        console.error('Error loading prducts:', error);
    })

function isOnCart(id) {
    for (const [index, product] of cart.entries()) {
        if (product.id === id)
            return true;
        else if (index === cart.length - 1)    
            return false;
    }
}

function buy(id) {
    for (const product of products) {
        if (product.id === id && !isOnCart(id))
        {
            product.quantity = 1;
            cart.push(product); 
        }         
        else if (product.id === id && isOnCart(id))
            product.quantity++;
    }
    applyPromotionsCart()
    sumCart()
    printCart()
    console.log(cart)
}

function cleanCart() {
    cart.forEach(product => {
        product.quantity = 0;
    });
    sumCart();
    printCart();
    console.log(cart);
}

function sumCart() {
    cart.total = 0;
    cart.quantity = 0;
    for (const product of cart) {
        product.subtotal = 0;
        if (product.offer && product.offer.subtotalWithDiscount)
            product.subtotal = product.subtotal + product.offer.subtotalWithDiscount
        else
            product.subtotal = product.subtotal + product.price * product.quantity
    }
    for (const product of cart) {
        cart.total = cart.total + product.subtotal
    }
    for (const product of cart) {
        cart.quantity = cart.quantity + product.quantity
    }
    document.getElementById("count_product").textContent = `${cart.quantity}`
}

function applyPromotionsCart() {
    for (const product of cart) {
        if (product.offer && product.quantity >= product.offer.number)
            product.offer.subtotalWithDiscount = product.price * (1 - product.offer.percent / 100) * product.quantity
        else if (product.offer && product.quantity < product.offer.number && product.offer.subtotalWithDiscount)
            product.offer.subtotalWithDiscount = null
    }
}

function printCart() {
    const cartList = document.getElementById("cart_list");
    const totalPrice = document.getElementById("total_price")

    for (let index = cart.length - 1; index >= 0; index--) {
            const product = cart[index];
            let currentRow = Array.from(cartList.rows).find(row => 
                row.cells[0] && row.cells[0].textContent === product.name);
            if (currentRow && product.quantity >= 1)
            {
                currentRow.cells[2].textContent = `${product.quantity}`;
                currentRow.cells[3].textContent = `${product.subtotal.toFixed(2)}`;
            }
            else if (currentRow && product.quantity === 0)
            {
                currentRow.remove();
                cart.splice(index, 1)
            }
            else
            {
                let newRow = document.createElement('tr');
                newRow.innerHTML = `
                <th scope="row">${product.name}</th>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
                <td>${product.subtotal}</td>
                <td><button type="button" class="border-0" onClick="removeFromCart(${product.id})"><i class="fa-solid fa-x"></i></button></td>
                `;
            cartList.appendChild(newRow);
            }
        
    }
    totalPrice.innerHTML = `${cart.total.toFixed(2)}`
}

function removeFromCart(id) {
    for (const product of cart) {
        if (product.id === id)
            product.quantity--;
    }
    applyPromotionsCart();
    sumCart();
    printCart();
    console.log(cart)
}