import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-swipe-card',
  standalone: true,
  templateUrl: './swipe-card.html',
  styleUrls: ['./swipe-card.css'],
})
export class SwipeCard {
  @Input() catImage: string = '';
  @Output() liked = new EventEmitter<void>();
  @Output() disliked = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

  onSwipeLeft() {
    this.el.nativeElement.querySelector('.card').classList.add('swipe-left');
    setTimeout(() => this.disliked.emit(), 300);
  }

  onSwipeRight() {
    this.el.nativeElement.querySelector('.card').classList.add('swipe-right');
    setTimeout(() => this.liked.emit(), 300);
  }
}
