import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AddProductComponent } from "../add-product/add-product.component";
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { CommonModule } from '@angular/common';
import { TiendaServiceService } from '../../services/tienda-service.service';
import { TableModule } from 'primeng/table';
import { EditProductComponent } from "../edit-product/edit-product.component";
import { Product } from '../Interfaces/products';
import { ToastMessageService } from '../../services/toast-message.service';
@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [ButtonModule, DialogModule, ToastModule, AddProductComponent, ToolbarComponent, CommonModule,
    TableModule, EditProductComponent],
  providers: [MessageService],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {
  displayAddDialog = false; 
  displayEditDialog = false;
  selectedProduct: any;

  openAddDialog() {
    this.selectedProduct = null; 
    this.displayAddDialog = true;
  }

  openEditDialog(product: any) {
    this.selectedProduct = product; 
    this.displayEditDialog = true;
  }
  closeAddDialog() {
    this.displayAddDialog = false;
    this.getListProduct();
  }

  closeEditDialog() {
    this.displayEditDialog = false;
    this.getListProduct()
  }

  listProducts: Product[] = []

    constructor( private productservice:TiendaServiceService,private toastService: ToastMessageService) {
      this.getListProduct();
    }
    getListProduct(){
      this.productservice.getProducts().subscribe((data) =>{
        this.listProducts = data;
      })
    }
    deleteProduct(id: number, name:string) {
      this.productservice.deleteProduct(id).subscribe({ 
        error: response => {
          this.toastService.showWarn('¡Advertencia!', 'El producto ' + name + ' ha sido eliminado.');
          this.getListProduct();
        },
        next: error => {
          this.toastService.showError('Error!', 'accion suspendida');
        },
        complete: () => {
          this.toastService.showSuccess('¡Proceso Completado!', 'El proceso se completo correctamente')
        }
      });
    }
}
