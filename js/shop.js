// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

let cart = [];

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
    cart.length = 0;
}

function sumCart() {
    cart.total = 0;
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
}

function applyPromotionsCart() {
    for (const product of cart) {
        if (product.offer && product.quantity >= product.offer.number)
            product.offer.subtotalWithDiscount = product.price * (1 - product.offer.percent / 100) * product.quantity
    }
}

function printCart(product) {
    const cartList = document.getElementById("cart_list");
    const totalPrice = document.getElementById("total_price")

    for (const product of cart) {
            let currentRow = Array.from(cartList.rows).find(row => 
                row.cells[0] && row.cells[0].textContent === product.name);
            if (currentRow)
            {
                currentRow.cells[2].textContent = `${product.quantity}`;
                currentRow.cells[3].textContent = `${product.subtotal.toFixed(2)}`;
            }
            else
            {
                let newRow = document.createElement('tr');
                newRow.innerHTML = `
                <th scope="row">${product.name}</th>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
                <td>${product.subtotal}</td>
                `;
            cartList.appendChild(newRow);
            }
        
    }
    totalPrice.innerHTML = `${cart.total.toFixed(2)}`
}