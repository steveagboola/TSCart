"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printCart = exports.cartTotal = exports.removeQuantityFromCart = exports.removeFromCart = exports.addToCart = exports.createItem = exports.createUser = void 0;
const uuid_1 = require("uuid");
function createUser(name, age) {
    return { id: (0, uuid_1.v4)(), name, age, cart: [] };
}
exports.createUser = createUser;
function createItem(name, price, description) {
    return { id: (0, uuid_1.v4)(), name, price, description };
}
exports.createItem = createItem;
function addToCart(user, item) {
    user.cart.push(item);
}
exports.addToCart = addToCart;
function removeFromCart(user, itemId) {
    user.cart = user.cart.filter(item => item.id !== itemId);
}
exports.removeFromCart = removeFromCart;
function removeQuantityFromCart(user, itemId, quantity) {
    let count = 0;
    user.cart = user.cart.filter(item => {
        if (item.id === itemId && count < quantity) {
            count++;
            return false;
        }
        return true;
    });
}
exports.removeQuantityFromCart = removeQuantityFromCart;
function cartTotal(user) {
    return user.cart.reduce((total, item) => total + item.price, 0);
}
exports.cartTotal = cartTotal;
function printCart(user) {
    console.log(user.cart);
}
exports.printCart = printCart;
