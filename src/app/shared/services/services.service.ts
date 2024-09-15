import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private apiUrl = "http://localhost:8080/notice"

  constructor(private http: HttpClient) { }

  getNew(): Observable<News[]> {
    return this.http.get<News[]>(`${this.apiUrl}/all-news`);
  }

  getNewsRecommended(id: number | undefined ): Observable<News[]> {
    return this.http.get<News[]>(`${this.apiUrl}/recommended/${id}`);
  }

  getDetailsnews(id: string | null ): Observable<News> {
    return this.http.get<News>(`${this.apiUrl}/new/${id}`);
  }

}
