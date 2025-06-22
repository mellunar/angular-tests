import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpCalls {
  http = inject(HttpClient);

  getSpaceNews(offset = 0) {
    return this.http.get(`https://api.spaceflightnewsapi.net/v4/blogs?offset=${offset}`);
  }
}
