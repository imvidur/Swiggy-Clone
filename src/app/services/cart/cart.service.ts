import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../../shared/models/Cart';
import { CartItem } from '../../shared/models/CartItem';
import { Food } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable(); // Observable for cart count

  constructor() {
    this.updateCartCount(); // Initialize cart count
  }

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
    } else {
      this.cart.items.push(new CartItem(food));
      this.updateCartCount(); // Update count after adding a new item
    }
  }

  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
    this.updateCartCount(); // Update count after removing an item
  }

  changeQuantity(foodId: number, quantity: number): void {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
    this.updateCartCount(); // Update count after changing quantity
  }

  getCart(): Cart {
    return this.cart;
  }

  private updateCartCount(): void {
    const count = this.cart.items.reduce((sum, item) => sum + item.quantity, 0);
    this.cartCountSubject.next(count); // Emit the updated count
  }
}
