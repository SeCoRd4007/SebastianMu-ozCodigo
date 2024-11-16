import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PersonalFormComponent } from "../personal-form/personal-form.component";
import { ManagementFormComponent } from "../management-form/management-form.component";
import { CalendarFormComponent } from "../calendar-form/calendar-form.component";
import { VacacionesService } from '../../services/vacaciones.service';

@Component({
  selector: 'app-main-form',
  standalone: true,
  imports: [ButtonModule, CommonModule, ReactiveFormsModule, PersonalFormComponent, ManagementFormComponent, 
    CalendarFormComponent],
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.css'
})
export class MainFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private vacacionesServices: VacacionesService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone:['', [Validators.required, Validators.pattern]],
      managementname:['',[Validators.required]],
      managementemail:['',[Validators.required,Validators.email]],
      datestrt:['',Validators.required],
      dateend:['',Validators.required],
      txtArea:['',Validators.required]
    })
    }
    
    
  
  onSubmit() {
    if (this.userForm.valid) {
      const datestart = this.formatDate(this.userForm.value.datestrt);
      const dateend = this.formatDate(this.userForm.value.dateend);
      const {name,lastName,email,phone,managementname,managementemail,txtArea} = this.userForm.value;
      console.log(this.userForm.value);
      this.vacacionesServices.registro(name, lastName, email, phone, managementname, managementemail, 
        datestart,dateend, txtArea).subscribe({ 
          next: response => {
            console.log('Vacaciones registradas correctamente', response);
          },
          error: error => {
            console.log('Error en el registro de vacaciones', error);
          },
          complete: () => {
            console.log('Proceso de registro completado');
          }
        });
      
    } else {
      console.log('Formulario invalido');
    }

  }

  private formatDate(date: Date): string {
    if (!date) return '';
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }
}
