import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { CommonModule } from '@angular/common';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    PensamentoComponent
  ],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent implements OnInit {

  constructor(private service: PensamentoService) {}

  listaPensamentos: Pensamento[] = []

  ngOnInit(): void {
    this.service.listar();
  }


  // {
  //   conteudo: 'Eu estou usando Angular',
  //   autoria: 'Pedro',
  //   modelo: 'modelo1'
  // },
  // {
  //   conteudo: 'Eu estou usando Angular',
  //   autoria: 'Pedro',
  //   modelo: 'modelo2'
  // },
  // {
  //   conteudo: 'Eu estou usando Angular',
  //   autoria: 'Pedro',
  //   modelo: 'modelo3'
  // },
  // {
  //   conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',
  //   autoria: '',
  //   modelo: 'modelo1'
  // },
  // {
  //   conteudo: 'Eu estou usando Angular',
  //   autoria: 'Pedro',
  //   modelo: 'modelo3'
  // }
}
