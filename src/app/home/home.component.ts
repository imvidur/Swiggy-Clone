import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { TagsComponent } from '../tags/tags.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { FoodMenuComponent } from "../food-menu/food-menu.component";


@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CommonModule, RouterLink, SearchComponent, TagsComponent, NotFoundComponent, StarRatingComponent, FoodMenuComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  foods: Food[] = [];
  constructor(private foodService: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      else if (params['tag'])
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      else
        this.foods = this.foodService.getAll();
    })
  }

}
