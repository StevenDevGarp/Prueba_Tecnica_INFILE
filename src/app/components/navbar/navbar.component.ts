import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

// const MATERIAL_MODULE = [MatIconModule, MatToolbarModule, MatButtonModule];

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goNewsList(): void {
    this.router.navigate(['/news-list']);
  }

  goHome(): void {
    this.router.navigate(['/news-list']);
  }


}
