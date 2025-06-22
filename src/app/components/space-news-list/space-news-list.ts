import { HttpCalls } from '$app/services/http-calls';
import { Component, inject, OnInit, signal } from '@angular/core';
import { SpaceNews } from '../space-news-item/space-news-item.interface';
import { SpaceNewsItem } from '../space-news-item/space-news-item';

@Component({
  selector: 'app-space-news-list',
  imports: [SpaceNewsItem],
  templateUrl: './space-news-list.html',
  styleUrl: './space-news-list.scss',
})
export class SpaceNewsList implements OnInit {
  private httpService = inject(HttpCalls);

  newsList = signal<SpaceNews[]>([]);

  ngOnInit() {
    this.httpService.getSpaceNews().subscribe({
      next: (data: any) => {
        if (data?.results) {
          this.newsList.set(data.results);
        }
      },
      error: (err) => {
        if (err?.status && err.status !== 0) {
          console.error(err);
        }
      },
    });
  }
}
