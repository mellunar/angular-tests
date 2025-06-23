import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpaceNewsList } from './components/space-news-list/space-news-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SpaceNewsList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
