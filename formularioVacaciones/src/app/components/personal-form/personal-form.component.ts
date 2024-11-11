import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup,FormBuilder,Validators,ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
@Component({
  selector: 'app-personal-form',
  standalone: true,
  imports: [CommonModule,InputTextModule,ReactiveFormsModule, MessageModule],
  templateUrl: './personal-form.component.html',
  styleUrl: './personal-form.component.css'
})
export class PersonalFormComponent {
  @Input() userForm!: FormGroup;


  constructor() {
    
    

    
  }
}
