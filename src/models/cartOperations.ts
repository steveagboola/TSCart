import { v4 as uuidv4 } from 'uuid';
import { User, Item } from '../types/index';

export function createUser(name: string, age: number): User {
  return { id: uuidv4(), name, age, cart: [] };
}

export function createItem(name: string, price: number, description: string): Item {
  return { id: uuidv4(), name, price, description };
}

export function addToCart(user: User, item: Item): void {
  user.cart.push(item);
}

export function removeFromCart(user: User, itemId: string): void {
  user.cart = user.cart.filter(item => item.id !== itemId);
}

export function removeQuantityFromCart(user: User, itemId: string, quantity: number): void {
  let count = 0;
  user.cart = user.cart.filter(item => {
    if (item.id === itemId && count < quantity) {
      count++;
      return false;
    }
    return true;
  });
}

export function cartTotal(user: User): number {
  return user.cart.reduce((total, item) => total + item.price, 0);
}

export function printCart(user: User): void {
  console.log(user.cart);
}