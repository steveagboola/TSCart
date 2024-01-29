"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cartOperations_1 = require("./models/cartOperations");
// Create a User
const user = (0, cartOperations_1.createUser)("John Johns", 30);
// Create Items
const itemA = (0, cartOperations_1.createItem)("Item A", 100, "Description of Item A");
const itemB = (0, cartOperations_1.createItem)("Item B", 200, "Description of Item B");
const itemC = (0, cartOperations_1.createItem)("Item C", 300, "Description of Item C");
// Add Item A to the user's Cart
(0, cartOperations_1.addToCart)(user, itemA);
(0, cartOperations_1.printCart)(user);
console.log('Cart Total:', (0, cartOperations_1.cartTotal)(user));
// Add 3 Item B to the user's Cart
(0, cartOperations_1.addToCart)(user, itemB);
(0, cartOperations_1.addToCart)(user, itemB);
(0, cartOperations_1.addToCart)(user, itemB);
(0, cartOperations_1.printCart)(user);
console.log('Cart Total:', (0, cartOperations_1.cartTotal)(user));
// Add 3 Item C to the user's Cart
(0, cartOperations_1.addToCart)(user, itemC);
(0, cartOperations_1.addToCart)(user, itemC);
(0, cartOperations_1.addToCart)(user, itemC);
(0, cartOperations_1.printCart)(user);
console.log('Cart Total:', (0, cartOperations_1.cartTotal)(user));
// Remove all of Item B from the cart
(0, cartOperations_1.removeFromCart)(user, itemB.id);
(0, cartOperations_1.printCart)(user);
console.log('Cart Total:', (0, cartOperations_1.cartTotal)(user));
// Remove 2 of Item C from the cart
(0, cartOperations_1.removeQuantityFromCart)(user, itemC.id, 2);
(0, cartOperations_1.printCart)(user);
console.log('Cart Total:', (0, cartOperations_1.cartTotal)(user));
