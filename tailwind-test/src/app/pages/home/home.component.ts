import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  estados: string[] = ['RN','PE','CE','PB'];
  generos: string[] = ['Masculino', 'Feminino'];
}
