import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TiendaServiceService } from '../../services/tienda-service.service';
import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastMessageService } from '../../services/toast-message.service';
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, CardModule, InputTextModule, ButtonModule, MessageModule
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,
    private prudctservice: TiendaServiceService, private toastService: ToastMessageService
  ){
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required]
    });
  }

  addProduct() {
    if (this.form.valid) {
      const {name,description,price,stock} = this.form.value;
      console.log(this.form.value);
      this.prudctservice.registro(name, description, price, stock).subscribe({ 
          error: response => {
            this.toastService.showSuccess('¡Producto Agregado!', 'El producto se agrego correctamente');
          },
          next: error => {
            this.toastService.showWarn('¡Advertencia!', 'El producto no se agrego');
          },
          complete: () => {
            this.toastService.showSuccess('¡Proceso Completado!', 'El proceso se completo correctamente')
          }
        });
      
    } else {
      this.toastService.showError('¡Error!', 'proceso Invalido')
    }

  }
  @Input() dialogVisible!: boolean;
  @Output() dialogVisibleChange = new EventEmitter<boolean>();

  closeDialog() {
    this.dialogVisible = false;
    this.dialogVisibleChange.emit(this.dialogVisible);
  }
}
