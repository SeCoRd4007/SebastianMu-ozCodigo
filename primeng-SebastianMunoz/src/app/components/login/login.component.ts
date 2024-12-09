import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PasswordModule,InputTextModule,ButtonModule ,CommonModule, ReactiveFormsModule, CardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    
  }
  irPagina(){
    this.router.navigate(['/register']);
  }
  onSubmit(){
    if (this.loginForm.valid) {
      console.log('registrado', this.loginForm.value);
      this.router.navigate(['/register']);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
