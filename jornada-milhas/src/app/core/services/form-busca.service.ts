import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalComponent } from '../../shared/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatChipSelectionChange } from '@angular/material/chips';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  formBusca: FormGroup;

  constructor(private dialog: MatDialog) { 
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),
      origem: new FormControl(null),
      destino: new FormControl(null),
      tipo: new FormControl("Econômica"),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0)
    })
  }

  getDescricaoPassageiros(): string {
    let descricao = '';
    const adultos = this.formBusca.get('adultos')?.value;
    if (adultos) {
      if (adultos > 0) {
        descricao += `${adultos} Adultos`;
      } else {
        descricao += '1 Adulto';
      }
    }
    descricao += ', ';
    const criancas = this.formBusca.get('criancas')?.value;
    if (criancas) {
      if (criancas > 0) {
        descricao += `${criancas} Crianças`;
      } else {
        descricao += '1 Crianças';
      }
    }
    descricao += ' e ';
    const bebes = this.formBusca.get('bebes')?.value;
    if (bebes) {
      if (bebes > 0) {
        descricao += `${bebes} Bebês`;
      } else {
        descricao += '1 Bebê';
      }
    } 
    return descricao;
  }

  obterControle(nome:string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%',
    });
  }

  alterarTipo(evento: MatChipSelectionChange, tipo: String) {7
    if (evento.selected) {
      this.formBusca.patchValue({
        tipo,
      })
    }
  }
}
