import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { PersonajesComponent } from '../personajes/personajes.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  @Input('nuevo') personajes: Personaje[] = [];
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
