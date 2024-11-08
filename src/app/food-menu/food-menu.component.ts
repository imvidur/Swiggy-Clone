import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FavoritesService } from '../services/favourite.service';

@Component({
  selector: 'app-food-menu',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.css'
})
export class FoodMenuComponent {

   constructor(private favoritesService: FavoritesService) {}

  addToFavorites(food: any): void {
    this.favoritesService.addFavorite(food);
  }
  @ViewChild('menuScroll', { static: true }) menuScroll!: ElementRef;

  foodItems = [
    { name: 'Biryani', image: '/assets/images/foods/biryani-box.avif' },
    { name: 'North Indian', image: '/assets/images/foods/north-indian.avif' },
    { name: 'Pizzas', image: '/assets/images/foods/pizza.avif' },
    { name: 'Burgers', image: '/assets/images/foods/burger-king.avif' },
    { name: 'Chinese', image: '/assets/images/foods/chinese.avif' },
    { name: 'Shake', image: '/assets/images/foods/shake.avif' },
    { name: 'Pure Veg', image: '/assets/images/foods/pure-veg.avif' },
    { name: 'Rolls', image: '/assets/images/foods/rolls.avif' },
  ];
  
  scrollLeft() {
    this.menuScroll.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight() {
    this.menuScroll.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }
}
