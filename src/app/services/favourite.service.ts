// favorites.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',  
})
export class FavoritesService {
  private storageKey = 'favorites';

  getFavorites(): any[] {
    const favorites = localStorage.getItem(this.storageKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  addFavorite(food: any): void {
    const favorites = this.getFavorites();
    favorites.push(food);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }

  removeFavorite(foodId: number): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter((item) => item.id !== foodId);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }

  isFavorite(foodId: number): boolean {
    const favorites = this.getFavorites();
    return favorites.some((item) => item.id === foodId);
  }
}
