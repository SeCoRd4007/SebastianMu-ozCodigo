import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacacionesService {
 apiUrl="https://localhost:7108/api/Vacaciones"
  constructor(private http: HttpClient) { }

  registro(name: string,lastname: string, email: string, phone: string, mngname: string, mngemail: string, datestrt: string, dateend: string, note: string): Observable<any>{
    
    return this.http.post(`${this.apiUrl}/registro`, {name,lastname, email, phone, mngname, mngemail, datestrt, dateend, note})
  }

  login(lastname: string, email:string):Observable<any>{
    const body = { lastname, email };
    return this.http.post(`${this.apiUrl}/login`, {lastname, email})

  }
}
