import { Component, Input, OnInit } from '@angular/core';
import { UnidadeFederativa } from '../../../core/types/type';
import { UnidadeFederativaService } from '../../../core/services/unidade-federativa.service';
import { Observable, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrl: './dropdown-uf.component.scss'
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = "";
  @Input() iconePrefixo: string = "";

  myControl = new FormControl('');

  unidadesFederativas: UnidadeFederativa[] = [];

  filteredOptions!: Observable<UnidadeFederativa[]>;

  constructor(private unidadeFederativaService: UnidadeFederativaService) {}

  ngOnInit(): void {
    this.unidadeFederativaService.listar().subscribe(
      dados => {
        this.unidadesFederativas = dados;
      }
    );
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): UnidadeFederativa[] {
    const filterValue = value.toLowerCase();
    return this.unidadesFederativas.filter(option => option.nome.toLowerCase().includes(filterValue));
  }
}
