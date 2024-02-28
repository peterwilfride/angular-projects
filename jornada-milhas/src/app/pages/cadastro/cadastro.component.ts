import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-cadastro',
  providers: [provideNativeDateAdapter()],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

}
