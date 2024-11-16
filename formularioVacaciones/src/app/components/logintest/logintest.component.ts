import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { VacacionesService } from '../../services/vacaciones.service';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';


@Component({
  selector: 'app-logintest',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, PasswordModule, CommonModule, HttpClientModule],
  templateUrl: './logintest.component.html',
  styleUrl: './logintest.component.css'
})
export class LogintestComponent {
  userForm: FormGroup


  constructor(private fb: FormBuilder, private vacacionesServices: VacacionesService) {
    
    this.userForm = this.fb.group({

      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],


    })

  }
  onSubmit() {
    if (this.userForm.valid) {
      const {lastname,email} = this.userForm.value;
      this.vacacionesServices.login(lastname,email).subscribe(response => {console.log("el usuario tiene vacaciones registradas",response)})
      console.log(this.userForm.value);
    } else {
      console.log('Formulario invalido');
    }

  }
}
