import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports:[CommonModule],
  template: `
    <div class="stars">
      <span *ngFor="let star of stars; let i = index" 
            (click)="rate(i + 1)"
            [class.filled]="i < rating"
            class="star">
        ★
      </span>
    </div>
  `,
  styles: [`
    .stars {
      display: flex;
      cursor: pointer;
    }
    .star {
      font-size: 20px;
      color: black;
    }
    .star.filled {
      color: red;
    }
  `]
})
export class StarRatingComponent {
  @Input() rating = 0;
  stars: number[] = Array(5).fill(0);

  rate(value: number) {
    this.rating = value;
  }
}
