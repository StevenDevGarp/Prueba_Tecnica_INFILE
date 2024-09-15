import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ServicesService} from '../../shared/services/services.service';
import { News } from '../../models/models';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NewsRecommendedComponent } from '@components/news-recommended/news-recommended.component';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [CommonModule, NewsRecommendedComponent],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.css'
})
export class NewsDetailsComponent {
  news: News | null = null;
  
  constructor(private newsService: ServicesService, private route: ActivatedRoute, private location: Location, private router: Router) {
  }

  ngOnInit(): void {
    const newsId = this.route.snapshot.paramMap.get('id');
    if (newsId) {
      this.newsService.getDetailsnews(newsId).subscribe({
        next: (newsData) => {
          this.news = newsData;
        },
        error: (err) => {
          console.error('Error fetching news:', err);
        }
      });
    }
  }

  returnViewListNews(): void {
    this.router.navigate(['/news-list']);
  }

}
