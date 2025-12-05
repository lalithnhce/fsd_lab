import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent {
  @Input({ required: false }) rating = 0;
  @Input({ required: false }) isReadOnly = true;
  @Output() ratingChange = new EventEmitter<number>();

  // array for template-driven rendering
  readonly stars = [1, 2, 3, 4, 5];

  setRating(value: number) {
    if (this.isReadOnly) return;
    this.rating = value;
    this.ratingChange.emit(this.rating);
  }

  // no-op for now - keeps future interactions easier
  onHover(_value: number) {}
}
