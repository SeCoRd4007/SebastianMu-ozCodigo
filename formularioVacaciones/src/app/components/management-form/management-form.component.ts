import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators,ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-management-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,InputTextModule],
  templateUrl: './management-form.component.html',
  styleUrl: './management-form.component.css'
})
export class ManagementFormComponent {
  userForm: FormGroup;


  constructor(private fb: FormBuilder) {
    
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    
  }
}
