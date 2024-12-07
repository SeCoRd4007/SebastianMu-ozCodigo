import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TiendaServiceService } from '../../services/tienda-service.service';
import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastMessageService } from '../../services/toast-message.service';
@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, CardModule, InputTextModule, ButtonModule, MessageModule
  ],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,
    private prudctservice: TiendaServiceService, private toastService: ToastMessageService
  ){
    this.form = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    console.log("selectedProduct en ngOnInit", this.selectedProduct);
    // Asegúrate de que los datos del producto se asignen correctamente al formulario
    if (this.selectedProduct) {
      this.form.patchValue({
        id: this.selectedProduct.id,
        name: this.selectedProduct.name,
        description: this.selectedProduct.description,
        price: this.selectedProduct.price,
        stock: this.selectedProduct.stock
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedProduct'] && this.selectedProduct) {
      // Aquí puedes asignar los valores del producto al formulario
      this.form.patchValue({
        id: this.selectedProduct.id,
        name: this.selectedProduct.name,
        description: this.selectedProduct.description,
        price: this.selectedProduct.price,
        stock: this.selectedProduct.stock
      });
    }
  }
  
  // En el componente hijo, escuchar el cambio de selectedProduct y actualizar el formulario

  onUpdate(): void {
    console.log(this.form);
    if (this.form.valid) {
      const { id, name, description, price, stock } = this.form.value;

      // Llamar al servicio para editar el producto
      this.prudctservice.editProduct(id, name, description, price, stock).subscribe({
        next: () => {
          this.toastService.showSuccess('¡Producto Editado!', 'El producto se editó correctamente');
          this.dialogVisible = false; // Cerrar el diálogo después de la actualización
          this.dialogVisibleChange.emit(this.dialogVisible);
        },
        error: () => {
          this.toastService.showWarn('¡Advertencia!', 'El producto no ha sido editado');
        }
      });
    }
  }
  @Input() selectedProduct!: any;
  @Input() dialogVisible!: boolean;
  @Output() dialogVisibleChange = new EventEmitter<boolean>(); // Evento para emitir cambios

  // Método para cerrar el diálogo y emitir el cambio
  closeDialog(): void {
    this.dialogVisible = false;
    this.dialogVisibleChange.emit(this.dialogVisible);  // Emite el nuevo valor al componente padre
  }

  // Método para abrir el diálogo
  openDialog(): void {
    this.dialogVisible = true;
    this.dialogVisibleChange.emit(this.dialogVisible);  // Emite el nuevo valor al componente padre
  }
 
}