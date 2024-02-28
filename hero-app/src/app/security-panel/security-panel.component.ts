import { Component } from '@angular/core';

@Component({
  selector: 'app-security-panel',
  templateUrl: './security-panel.component.html',
  styleUrls: ['./security-panel.component.css']
})
export class SecurityPanelComponent {

  permissions: String[] = ['animais', 'paises'];

  hasPermissionPessoas(): boolean {
    return this.permissions.includes('pessoas');
  }

  hasPermissionAnimais(): boolean {
    return this.permissions.includes('animais');
  }

  hasPermissionPaises(): boolean {
    return this.permissions.includes('paises');
  }
}
