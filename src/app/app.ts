import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpaceNews } from './components/space-news-item/space-news-item.interface';
import { HttpCalls } from './services/http-calls';
import { SpaceNewsList } from './components/space-news-list/space-news-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SpaceNewsList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
