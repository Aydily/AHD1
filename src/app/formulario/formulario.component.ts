import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validateHeaderName } from 'http';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  resultado = "";
  usuarios: any[] =  [];
  id= 1;
  constructor(@Inject (DOCUMENT) private document: Document){
    const localStorage = document.defaultView?.localStorage;
    this.usuarios = [];
    
  
    let datos = localStorage?.getItem("usuario");
    if(datos != null){
      let arreglo = JSON.parse(datos); 
      if(arreglo != null ){
        for(let usuario of arreglo) {
          this.usuarios.push(usuario);
        }
        const maxId = Math.max(...this.usuarios.map(user => user.id), 0);
        this.id = maxId + 1;
      }
      console.log(this.usuarios);
      console.log(this.id)
    }
    this.ajustarId();
  }
  
  ajustarId() {
    if (this.usuarios.length > 0) {
      const ids = this.usuarios.map(user => user.id);
      const maxId = Math.max(...ids);
      this.id = maxId + 1;
    }
  }

  formularioContacto = new FormGroup({
    id: new FormControl(this.id),
    nombre: new FormControl('',[Validators.required, Validators.minLength(10)]),
    edad: new FormControl('',[Validators.required]),
    dpi: new FormControl('',[Validators.required,Validators.minLength(13), Validators.maxLength(13)]),
  });


  enviar(){
    if(this.formularioContacto.valid){
      this.formularioContacto.patchValue({ id: this.id });
      this.resultado = "Usuario agregado exitosamente";
      this.usuarios.push(this.formularioContacto.value as string);
      localStorage.setItem("usuario", JSON.stringify(this.usuarios));
      this.id++;
      this.formularioContacto.disable();
      console.log(this.id);
    }else{
      this.resultado = "Hay datos invalidos en el formulario.";
    }
  } 

  nuevo(){
    this.formularioContacto.reset();
    this.formularioContacto.enable();
    this.resultado = "";
  }

}
