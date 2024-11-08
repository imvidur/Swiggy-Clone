// favorites.component.ts
import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favourite.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,  
  imports: [CommonModule],  
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

  removeFavorite(foodId: number): void {
    this.favoritesService.removeFavorite(foodId);
    this.loadFavorites(); 
  }
}
