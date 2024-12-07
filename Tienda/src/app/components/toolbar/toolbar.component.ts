import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [ToolbarModule, ButtonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  @Output() open = new EventEmitter<void>();

  openDialog() {
    this.open.emit(); // Emite el evento para abrir el diálogo en el padre
  }
}
