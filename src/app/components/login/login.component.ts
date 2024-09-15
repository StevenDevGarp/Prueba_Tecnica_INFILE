import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../guards/auth.service'; // Asegúrate de que la ruta de importación es correcta.
import { CommonModule } from '@angular/common'; // Para funcionalidades básicas de Angular en las plantillas.
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule], // RouterModule no se añade aquí.
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export default class LoginComponent {
  user: string = "";
  password: string = "";

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.user, this.password).subscribe({
      next: () => this.router.navigate(['/news-list']),
      error: () => alert('Usuario o contraseña incorrectos')
    })
  }

  
  
}