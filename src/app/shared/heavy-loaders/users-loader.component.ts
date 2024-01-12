import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-loader',
  standalone: true,
  imports: [CommonModule],
  template: ` <h1>Hola Mundo</h1> `,
})
export class UsersLoaderComponent {}
