import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SwipeCard } from './swipe-card/swipe-card';

@Component({
  selector: 'app-root',
  imports: [CommonModule, SwipeCard],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('Paws-Preferences');

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

  likedCats: string[] = [];

  onLiked(index: number) {
    this.likedCats.push(this.cats[index]);
  }

  onDisliked(index: number) {
    console.log('Disliked cat', this.cats[index]);
  }
}
