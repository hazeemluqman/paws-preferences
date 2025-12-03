import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwipeCard } from './swipe-card/swipe-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SwipeCard],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  // App title
  protected readonly title = signal('Paws-Preferences');

  // List of 15 cat images from Cataas
  cats = [
    'https://cataas.com/cat?random=1',
    'https://cataas.com/cat?random=2',
    'https://cataas.com/cat?random=3',
    'https://cataas.com/cat?random=4',
    'https://cataas.com/cat?random=5',
    'https://cataas.com/cat?random=6',
    'https://cataas.com/cat?random=7',
    'https://cataas.com/cat?random=8',
    'https://cataas.com/cat?random=9',
    'https://cataas.com/cat?random=10',
    'https://cataas.com/cat?random=11',
    'https://cataas.com/cat?random=12',
    'https://cataas.com/cat?random=13',
    'https://cataas.com/cat?random=14',
    'https://cataas.com/cat?random=15',
  ];

  // Array to store liked cats
  likedCats: string[] = [];

  // Index of the current top card
  currentIndex = 0;

  // Get the current cat to display
  get currentCat(): string | null {
    return this.currentIndex < this.cats.length ? this.cats[this.currentIndex] : null;
  }

  // Handle "like" swipe
  onLiked(): void {
    if (this.currentCat) {
      this.likedCats.push(this.currentCat);
      this.nextCard();
    }
  }

  // Handle "dislike" swipe
  onDisliked(): void {
    this.nextCard();
  }

  // Move to the next card
  nextCard(): void {
    if (this.currentIndex < this.cats.length - 1) {
      this.currentIndex++;
    } else {
      console.log('All cats swiped!');
    }
  }
}
