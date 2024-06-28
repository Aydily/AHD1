import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { MostrarComponent } from './mostrar/mostrar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormularioComponent,  MostrarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AHD1';
}
