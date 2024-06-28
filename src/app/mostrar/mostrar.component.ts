import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar',
  standalone: true,
  imports: [],
  templateUrl: './mostrar.component.html',
  styleUrl: './mostrar.component.css'
})
export class MostrarComponent {

  usuarios: any[] = [];

  ngOnInit() {
    // Obtiene los datos del local storage
    let datos = localStorage?.getItem("usuario");
    if(datos != null){
      let arreglo = JSON.parse(datos);
      if(arreglo != null ){
        for(let usuario of arreglo) {
          this.usuarios.push(usuario);
        }
  }

  
    }
  }
  borrar(id: number){
    this.usuarios.splice(id,1);
    localStorage.clear();
    localStorage.setItem("usuario", JSON.stringify(this.usuarios))
  }
}
