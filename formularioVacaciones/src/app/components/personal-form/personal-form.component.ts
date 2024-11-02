import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators,ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-personal-form',
  standalone: true,
  imports: [CommonModule,InputTextModule,ReactiveFormsModule],
  templateUrl: './personal-form.component.html',
  styleUrl: './personal-form.component.css'
})
export class PersonalFormComponent {
  userForm: FormGroup;


  constructor(private fb: FormBuilder) {
    
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone:['', [Validators.required, Validators.pattern]]
      
    });

    
  }
}
