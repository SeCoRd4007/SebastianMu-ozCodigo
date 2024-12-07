import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
    console.log("Editando producto con id:", id);
    return this.http.put(`${this.apiUrl}/update/${id}`, body);
  }

  deleteProduct(id: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  
}
