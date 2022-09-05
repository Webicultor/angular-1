import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  
  personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre: "Vegeta",
      poder: 8500
    }
  ];

  nuevo: Personaje = {
    nombre: 'Follet Tortuga',
    poder: 12000
  }

  agregarNuevoPersonaje( argumento: Personaje ){
    //console.log( argumento )
    this.personajes.push( argumento )
  }

  constructor( private dbzService: DbzService ){
    
  }

}
