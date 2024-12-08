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
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search-products',
  standalone: true,
  imports: [ToastModule, ButtonModule, TableModule, FormsModule, CommonModule, DialogModule],
  templateUrl: './search-products.component.html',
  styleUrl: './search-products.component.css'
})
export class SearchProductsComponent {
  @Input() displayDialog: boolean = false;
  @Input() listProducts: Product[] = [];
  @Output() close = new EventEmitter<void>();

  filteredProducts: Product[] = [];
  searchTerm: string = '';

  ngOnInit() {
    this.filteredProducts = [...this.listProducts];  // Inicializamos con todos los productos
  }

  // Filtra los productos según el término de búsqueda
  onSearch() {
    this.filteredProducts = this.listProducts.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Cerrar el diálogo
  closeDialog() {
    this.close.emit();
  }
}
