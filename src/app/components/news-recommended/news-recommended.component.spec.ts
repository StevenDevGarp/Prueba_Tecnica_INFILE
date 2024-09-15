import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsRecommendedComponent } from './news-recommended.component';

describe('NewsRecommendedComponent', () => {
  let component: NewsRecommendedComponent;
  let fixture: ComponentFixture<NewsRecommendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsRecommendedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsRecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
