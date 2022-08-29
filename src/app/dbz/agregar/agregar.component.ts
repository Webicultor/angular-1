import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { PersonajesComponent } from '../personajes/personajes.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  /* cambiarNombre( event: any ){
    console.log(event);
  } */

  agregar(  ) {
    if( this.nuevo.nombre.trim().length === 0 ){
      return;
    }
    this.personajes.push(this.nuevo);
    this.nuevo = {nombre: '', poder: 0};
    console.log( this.personajes );
  }
}
