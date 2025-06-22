import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { SpaceNews } from './space-news-item.interface';

@Component({
  selector: 'app-space-news-item',
  imports: [CommonModule],
  templateUrl: './space-news-item.html',
  styleUrl: './space-news-item.scss',
})
export class SpaceNewsItem {
  news = input<SpaceNews>();
}
