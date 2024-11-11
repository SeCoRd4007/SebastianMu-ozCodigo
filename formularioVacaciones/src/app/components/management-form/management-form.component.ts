import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup,ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
@Component({
  selector: 'app-management-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,InputTextModule,MessageModule],
  templateUrl: './management-form.component.html',
  styleUrl: './management-form.component.css'
})
export class ManagementFormComponent {
  @Input() userForm!: FormGroup;


  constructor() {
     
  }
}
