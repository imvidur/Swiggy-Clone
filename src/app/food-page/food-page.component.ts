import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../not-found/not-found.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { TagsComponent } from '../tags/tags.component';
import { FavoritesService } from '../services/favourite.service';

@Component({
  selector: 'app-food-page',
  standalone:true,
  imports:[CommonModule, NotFoundComponent, StarRatingComponent, StarRatingComponent, TagsComponent],
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})

export class FoodPageComponent implements OnInit {

  food!: Food;
  constructor(private activatedRoute:ActivatedRoute,
    private foodService: FoodService, private favoritesService: FavoritesService,
    private cartService: CartService,
    private router: Router) { 
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.food = foodService.getFoodById(params['id']);
    })

  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
  addToFavorites(food: any): void {
    this.favoritesService.addFavorite(food);
  }
  toggleFavorite(): void {
    if (this.food.favorite) {
      this.favoritesService.removeFavorite(this.food.id);
      this.food.favorite = false;
    } else {
      this.favoritesService.addFavorite(this.food);
      this.food.favorite = true;
    }
  }

  goToFavorites(): void {
    this.router.navigate(['/favorites']);
  }

}
