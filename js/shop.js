// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'Cooking oil',
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

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

function countingProducts()
{
    const count = document.getElementById("count_product");
    let totalCount= cart.reduce((ac, product) => {
        return ac + product.quantity;
    }, 0);
    count.innerText = totalCount;
    
}
// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
    let productId = products.find(item => item.id === id)
    if (productId){
        let addedProduct = cart.find(item => item.id === id);
    if(addedProduct){
        addedProduct.quantity += 1;
    }
    else{
        cart.push({...productId, quantity: 1});
    }
    }
    countingProducts();
}  

// Exercise 2
function cleanCart() {
    cart = [];
    total = 0;

    const cartToErase = document.getElementById("cart_list")
    cartToErase.innerHTML = "";
    const priceToErase = document.getElementById("total_price")
    priceToErase.innerText = "0";
    const countToErase = document.getElementById("count_product");
    countToErase.innerText = "0";
}

// Exercise 3
function calculateTotal() {
        // Calculate total price of the cart using the "cartList" array
        total = 0;
    for(let item of cart)
    {   
        if(item.hasOwnProperty("subtotalWithDiscount"))
        {
            total += item.subtotalWithDiscount;
        }
        else{
         total += item.quantity * item.price;
        }
    }
     return total;
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let product of cart) {
        hasOffer = product.hasOwnProperty("offer");
        if (hasOffer) {
            isPromotionEnjoyer = product.quantity >= product.offer.number;
            if(isPromotionEnjoyer)
            {
                    var priceWithoutDiscount = product.price * product.quantity;
                    var discountPercent = priceWithoutDiscount * (product.offer.percent / 100);
                    product.subtotalWithDiscount = priceWithoutDiscount - discountPercent;
            }
        }
    }
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom2
    applyPromotionsCart();
    const shopCart = document.getElementById("cart_list")
    let productList = [];

    cart.forEach((product) => { 
        const productRow = createRow(product);
        productList.push(productRow);
    })
    shopCart.innerHTML = '';
    shopCart.append(...productList);
    
    const totalPrice = document.getElementById("total_price")
    totalPrice.textContent = calculateTotal()
}

function createRow(product)
{
    let tableRow = document.createElement("tr");
    let tableHead = document.createElement("th");

    tableHead.setAttribute("scope", "row");
    tableHead.textContent= product.name;

    let tableData1 = document.createElement("td")
    let tableData2 = document.createElement("td")
    let tableData3 = document.createElement("td")

    tableData1.textContent = product.price;
    tableData2.textContent = product.quantity;
    tableData3.textContent = product.hasOwnProperty('subtotalWithDiscount') 
        ? product.subtotalWithDiscount 
        : product.price * product.quantity;

        let decreaseButton = document.createElement("button");
        decreaseButton.textContent = "-";
        decreaseButton.addEventListener("click", () => removeFromCart(product.id));
    
        let tableData4 = document.createElement("td");
        tableData4.appendChild(decreaseButton);
    
        tableRow.append(tableHead, tableData1, tableData2, tableData3, tableData4);
    
        return tableRow;
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    cart.map((product) =>
    {
        if (product.id === id && product.quantity > 0)
        {
            product.quantity -= 1;
        }

        if (product.quantity === 0)
        {
            cart.splice(cart.indexOf(product), 1);
        }

        if (product.offer && product.quantity < product.offer.number) {
            delete product.subtotalWithDiscount;
        }
        countingProducts();
        printCart();
    });
}

function open_modal() {
    printCart();
}