import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PersonalFormComponent } from "../personal-form/personal-form.component";
import { ManagementFormComponent } from "../management-form/management-form.component";
import { CalendarFormComponent } from "../calendar-form/calendar-form.component";
@Component({
  selector: 'app-main-form',
  standalone: true,
  imports: [ButtonModule, CommonModule, ReactiveFormsModule, PersonalFormComponent, ManagementFormComponent, CalendarFormComponent],
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.css'
})
export class MainFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone:['', [Validators.required, Validators.pattern]],
      managementname:['',[Validators.required]],
      managementemail:['',[Validators.required,Validators.email]],
      calendarini:['',Validators.required],
      calendarend:['',Validators.required],
      txtArea:['',Validators.required]
    })
    }
    
    
  
  onSubmit() {
    if (this.userForm.valid) {
      const {name,lastName,email,phone,managementname,managementemail,txtArea} = this.userForm.value;
      console.log(this.userForm.value);
    } else {
      console.log('Formulario invalido');
    }

  }
}
