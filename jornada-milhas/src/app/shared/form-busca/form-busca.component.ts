import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuscaService } from '../../core/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  providers: [provideNativeDateAdapter()],
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.scss'
})
export class FormBuscaComponent {
  constructor(public formBuscaService: FormBuscaService) {}

  buscar() {
    console.log(this.formBuscaService.formBusca.value);
  }
}
