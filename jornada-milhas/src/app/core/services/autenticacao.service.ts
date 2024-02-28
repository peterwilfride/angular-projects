import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  autenticar(email: string, senha: string): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/auth/login`, {email, senha});
  }
}
