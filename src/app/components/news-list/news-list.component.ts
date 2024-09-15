import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../../models/models';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../../shared/services/services.service';
import { NgZone } from '@angular/core';
import { FilterComponent } from '@components/filter/filter.component';
import { NewsRecommendedComponent } from '@components/news-recommended/news-recommended.component';


@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule, FilterComponent, NewsRecommendedComponent],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent implements OnInit {
  news: News[] | null = null;
  
  constructor(private ngZone: NgZone, private service: ServicesService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.service.getNew().subscribe({
      next: (news) => {
        this.ngZone.run(() => {
          this.news = news;
        });
      },
      error: (error) => {
        console.error('Failed to fetch news', error);
      }
    });
  }


  viewDetails(newsItem: News): void {
    if (!newsItem.noticiaId) {
      console.error('News item ID is undefined');
      console.log(newsItem.noticiaId);
      return; // Evitar la navegación si el ID no está definido
    }
    this.router.navigate(['/news-details', newsItem.noticiaId]);
  }


}