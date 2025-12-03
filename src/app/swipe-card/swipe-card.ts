import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-swipe-card',
  standalone: true,                
  templateUrl: './swipe-card.html',
  styleUrls: ['./swipe-card.css']  
})
export class SwipeCard {
  @Input() catImage: string = '';
  @Output() liked = new EventEmitter<void>();
  @Output() disliked = new EventEmitter<void>();

  onSwipeRight() {
    this.liked.emit();
  }

  onSwipeLeft() {
    this.disliked.emit();
  }
}
