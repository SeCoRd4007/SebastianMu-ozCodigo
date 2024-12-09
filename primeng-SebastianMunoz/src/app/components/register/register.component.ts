import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Password, PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [PasswordModule,InputTextModule,ButtonModule ,CommonModule, ReactiveFormsModule, CardModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registroForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]],
    }
  );
  }



  onSubmit(){
    if (this.registroForm.valid) {
      console.log('Formulario Enviado', this.registroForm.value);
      this.router.navigate(['/login']);
    } else if(this.registroForm.value.password!=this.registroForm.value.confirmpassword) {
      console.log("las contraseñas no coinciden")
      this.registroForm.markAllAsTouched();
    }

  }
}
