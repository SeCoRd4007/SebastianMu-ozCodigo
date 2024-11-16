import { Component, Input} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MainFormComponent } from '../main-form/main-form.component';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { MessageModule } from 'primeng/message';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-calendar-form',
  standalone: true,
  imports: [MainFormComponent,CommonModule,InputTextModule,CalendarModule,ReactiveFormsModule,MessageModule,InputTextareaModule],
  templateUrl: './calendar-form.component.html',
  styleUrl: './calendar-form.component.css'
})
export class CalendarFormComponent {
  @Input() userForm!: FormGroup;
  constructor(){

  }
}
