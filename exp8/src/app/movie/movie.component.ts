import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { StarRatingComponent } from '../feature/star-rating/star-rating.component';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, StarRatingComponent],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  movie = {
    id: 1,
    name: 'The Great Story',
    rating: 4,
    cover: 'https://picsum.photos/300/180',
    reviews: [
      { author: 'Sam', rating: 4, published_on: new Date('2023-02-15'), text: 'Great movie!' }
    ]
  };

  // review form state
  newAuthor = '';
  newRating = 0;
  newText = '';

  submitReview() {
    const review = {
      author: this.newAuthor || 'Anonymous',
      rating: this.newRating || 0,
      published_on: new Date(),
      text: this.newText || ''
    };

    this.movie.reviews.push(review);

    // Recompute average rating quickly
    const avg = this.movie.reviews.reduce((s: number, r: any) => s + r.rating, 0) / this.movie.reviews.length;
    this.movie.rating = Math.round(avg * 10) / 10;

    // reset form
    this.newAuthor = '';
    this.newRating = 0;
    this.newText = '';
  }
}
