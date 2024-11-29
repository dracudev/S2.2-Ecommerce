# S2.2 Ecommerce Demo Application

## 📄 Description

This project is a demo web application for an e-commerce platform. It enables users to add products to a shopping cart, apply discounts, and validate their purchases. The primary focus is on implementing JavaScript concepts such as manipulating a dataset, organizing code into reusable functions, and managing a shopping cart and promotional discounts.

### Objectives

- Practice JavaScript concepts.
- Learn to manipulate datasets.
- Organize code into reusable functions.

<br>

## 📐 Project Structure

### ⭐ Level 1

- **Exercise 1**: Implement the `buy()` function, which allows users to add products to the cart using a product ID. Each product should include a `quantity` field, which increments if the product already exists in the cart.

- **Exercise 2**: Create the `cleanCart()` function to reset the cart to an empty state.

- **Exercise 3**: Implement a function to calculate the total cart value by summing up the prices of all products in the cart.

- **Exercise 4**: Add a promotional feature through `applyPromotionsCart()`:
  - 20% off on purchases of 3 or more cooking oil bottles.
  - 30% off on purchases of 10 or more bakery items.

- **Exercise 5**: Implement the `printCart()` function to dynamically display the cart contents in the modal with ID `cartModal`.

- **Exercise 6**: Implement form validation in `checkout.js` for the `checkout.html` form:
  - All fields are required.
  - Minimum 3 characters for all fields.
  - Name fields should contain only letters.
  - Phone should contain only numbers.
  - Password must include both numbers and letters.
  - Email must follow a valid email format.

### ⭐⭐ Level 2

- **Exercise 7**: Implement the `removeFromCart()` function to decrease the quantity of a product in the cart by one unit. If the quantity is 1, remove the product from the cart.

### ⭐⭐⭐ Level 3

- **Exercise 8**: Refine the UI for a professional, polished look suitable for client demos.

<br>

## 💻 Technologies Used

- JavaScript (ES6)
- HTML5
- CSS3
- Bootstrap 5

<br>

## 📋 Requirements

- **JavaScript ES6** or higher

<br>

## 🛠️ Installation

1. Clone this repository: 
  ```bash
  git clone https://github.com/dracudev/S2.2-Ecommerce.git
  ```
2. Navigate to the project directory: 
  ```bash
  cd S2.2-Ecommerce
  ```
3. Open the project in your text editor and start coding.
  ```bash
  code .
  ```
<br>

## ▶️ Execution

1. Open the `index.html` file in your browser to view the layout.
2. Modify src/shop.js and src/checkout.js as needed to complete exercises.
