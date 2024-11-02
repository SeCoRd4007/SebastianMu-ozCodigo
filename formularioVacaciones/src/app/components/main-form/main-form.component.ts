import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PersonalFormComponent } from "../personal-form/personal-form.component";
@Component({
  selector: 'app-main-form',
  standalone: true,
  imports: [ButtonModule, CommonModule, ReactiveFormsModule, PersonalFormComponent],
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.css'
})
export class MainFormComponent {
  userForm: FormGroup;


  constructor(private fb: FormBuilder) {
    
    this.userForm = this.fb.group({
    
    });


  }
}
