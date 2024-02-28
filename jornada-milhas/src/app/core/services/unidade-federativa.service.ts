import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { UnidadeFederativa } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class UnidadeFederativaService {

  private apiUrl: string = environment.apiUrl;
  
  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient.get<UnidadeFederativa[]>(`${this.apiUrl}/estados`)
  }
}
