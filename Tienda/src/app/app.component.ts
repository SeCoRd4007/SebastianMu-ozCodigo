import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    ButtonModule, ReactiveFormsModule, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'p-JorgeCollazos';
  
}
