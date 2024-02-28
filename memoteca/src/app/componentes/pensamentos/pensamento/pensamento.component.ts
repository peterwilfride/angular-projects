import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {
  @Input() pensamento: Pensamento = {
    id: 1,
    conteudo: 'Eu estou usando Angular',
    autoria: 'Pedro',
    modelo: 'modelo3'
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}