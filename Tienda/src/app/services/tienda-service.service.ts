import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../components/Interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class TiendaServiceService {
  apiUrl="https://localhost:7159/api/product"
  constructor(private http: HttpClient) { }

  registro(name: string,description: string, price: number, stock: number): Observable<any>{
    return this.http.post(`${this.apiUrl}/registro`, {name,description, price, stock})
  }

  getProducts(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/getProducts`)
  }

  editProduct(id: number, name: string,description: string, price: number, stock: number): Observable<any>{
    
    const body = {name,description,price,stock};
    return this.http.put(`${this.apiUrl}/update/${id}`, body);
  }

  deleteProduct(id: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
  getProductsname(searchTerm?: string): Observable<Product[]> {
    let url = `${this.apiUrl}/getProducts`;

    // Si se pasa un término de búsqueda, lo agregamos a la URL
    if (searchTerm) {
      url += `?search=${encodeURIComponent(searchTerm)}`;
    }

    return this.http.get<Product[]>(url); // Regresa un Observable de Product[]
  }
  
}
