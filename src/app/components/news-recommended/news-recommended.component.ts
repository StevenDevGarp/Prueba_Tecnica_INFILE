import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../../models/models';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../../shared/services/services.service';
import { NgZone } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-news-recommended',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './news-recommended.component.html',
  styleUrl: './news-recommended.component.css'
})
export class NewsRecommendedComponent implements OnInit {
  news: News[] | null = null;
  @Input() categoryId: number | undefined;
  
  constructor(private ngZone: NgZone, private service: ServicesService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
      this.service.getNewsRecommended(this.categoryId).subscribe({
        next: (newsData) => {
          this.news = newsData;
        },
        error: (err) => {
          console.error('Error fetching news:', err);
        }
      });
  }

}
