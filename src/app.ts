import { createUser, createItem, addToCart, printCart, cartTotal, removeFromCart, removeQuantityFromCart } from './models/cartOperations';

// Create a User
const user = createUser("John Johns", 30);

// Create Items
const itemA = createItem("Item A", 100, "Description of Item A");
const itemB = createItem("Item B", 200, "Description of Item B");
const itemC = createItem("Item C", 300, "Description of Item C");

// Add Item A to the user's Cart
addToCart(user, itemA);
printCart(user);
console.log('Cart Total:', cartTotal(user));

// Add 3 Item B to the user's Cart
addToCart(user, itemB);
addToCart(user, itemB);
addToCart(user, itemB);
printCart(user);
console.log('Cart Total:', cartTotal(user));

// Add 3 Item C to the user's Cart
addToCart(user, itemC);
addToCart(user, itemC);
addToCart(user, itemC);
printCart(user);
console.log('Cart Total:', cartTotal(user));

// Remove all of Item B from the cart
removeFromCart(user, itemB.id);
printCart(user);
console.log('Cart Total:', cartTotal(user));

// Remove 2 of Item C from the cart
removeQuantityFromCart(user, itemC.id, 2);
printCart(user);
console.log('Cart Total:', cartTotal(user));