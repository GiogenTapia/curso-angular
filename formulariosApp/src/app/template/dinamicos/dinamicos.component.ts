import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre:string,
  favoritos: Favorito[]
}

interface Favorito{
  id: number,
  nombre: string
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit{
  
  nuevoJuego: string = '';
  persona : Persona ={
    nombre:'Giovanni',
    favoritos:[
      {id: 1, nombre:'Megaman'},
      {id: 2, nombre:'Dark Souls'},
      {id: 3, nombre:'Zelda Majoras Mask'}
    ]
  }


  ngOnInit(): void {
   
  }

  @ViewChild('miFormulario') miFormulario!: NgForm;
  guardar(){
    console.log('Formulario posteado');
  }

  validar():boolean{
    return this.miFormulario?.form.controls['nombre']?.invalid && 
    this.miFormulario?.form.controls['nombre']?.touched;
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index,1);
  }

  agregarJuego(){
    const favoritoNuevo: Favorito = {
      id:this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    };
    this.persona.favoritos.push({...favoritoNuevo});
    this.nuevoJuego = '';
  }

}
