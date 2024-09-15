import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../guards/register.service'; // Asegúrate de que la ruta de importación es correcta.
import { CommonModule } from '@angular/common'; // Para funcionalidades básicas de Angular en las plantillas.
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: string = "";
  password: string = "";
  fullName: string = "";
  email: string = "";

  constructor(private register: RegisterService, private router: Router) {}

  registerUser(): void {
    this.register.register(this.user, this.password, this.fullName, this.email).subscribe({
      next: () => this.router.navigate(['/news-list']),
      error: () => alert('Usuario o contraseña incorrectos')
    })
  }
}
