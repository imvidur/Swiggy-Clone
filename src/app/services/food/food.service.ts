import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root',
})

export class FoodService {
  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }
  
  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All ITEMS', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Burger', count: 3 },
      { name: 'Momo', count: 2 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All ITEMS" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Hut',
        cookTime: '10-20 mins',
        price: 100,
        favorite: false,
        origins: ['Cuttack'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/pizza-hut.avif',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Wow! Momo',
        price: 90,
        cookTime: '10-15 mins',
        favorite: true,
        origins: ['Nepal'],
        stars: 4.8,
        imageUrl: '/assets/images/foods/wow-momo.avif',
        tags: ['Momo', 'FastFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Biggies Burger',
        price: 500,
        cookTime: '30-35 mins',
        favorite: false,
        origins: ['Bhubaneshwar', 'Cuttack', 'Puri'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/biggies_burger.avif',
        tags: ['FastFood', 'Burger', 'Gautam Nagar'],
      },
      {
        id: 4,
        name: 'Finger Licking Food',
        price: 200,
        cookTime: '15-20 mins',
        favorite: true,
        origins: ['BBSR', 'Kolkata'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/finger_lickingfood.avif',
        tags: ['FastFood', 'Fry', 'Potatoes'],
      },
      {
        id: 5,
        name: 'The Tandoori Night',
        price: 110,
        cookTime: '40-50 mins',
        favorite: false,
        origins: ['Patna', 'Odisha', 'Bengal'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/the_tandoori_night.avif',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 900,
        cookTime: '40-50 mins',
        favorite: false,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/born_to_eat.avif',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Wow! Kulfi',
        price: 50,
        cookTime: '5-10 mins',
        favorite: true,
        origins: ['India'],
        stars: 4.9,
        imageUrl: '/assets/images/foods/wow!kulfi.avif',
        tags: ['Dessert', 'Kulfi', 'Cold'],
      },
      {
        id: 8,
        name: 'Bharpoor Meal',
        price: 300,
        cookTime: '30-40 mins',
        favorite: false,
        origins: ['Punjab'],
        stars: 4.2,
        imageUrl: '/assets/images/foods/bharpoor.avif',
        tags: ['Lunch', 'Indian', 'Meal'],
      },
      {
        id: 9,
        name: 'Chinese Express',
        price: 150,
        cookTime: '20-25 mins',
        favorite: true,
        origins: ['China'],
        stars: 3.8,
        imageUrl: '/assets/images/foods/chinese_express.avif',
        tags: ['Chinese', 'Noodles', 'Dinner'],
      },
      {
        id: 10,
        name: 'Hotel Prasanna Special',
        price: 250,
        cookTime: '30-40 mins',
        favorite: false,
        origins: ['India'],
        stars: 4.3,
        imageUrl: '/assets/images/foods/hotel_prasanna.avif',
        tags: ['Special', 'Indian', 'Meal'],
      },
      {
        id: 11,
        name: 'Baba Ben Chow',
        price: 120,
        cookTime: '15-20 mins',
        favorite: false,
        origins: ['China'],
        stars: 4.1,
        imageUrl: '/assets/images/foods/bababenchow.avif',
        tags: ['Chinese', 'Chow Mein', 'Dinner'],
      },
      {
        id: 12,
        name: 'Big Guys Wings',
        price: 180,
        cookTime: '20-30 mins',
        favorite: true,
        origins: ['USA'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/bigguyswings.avif',
        tags: ['FastFood', 'Wings', 'American'],
      },
      
    ];
  }
  
}
